#venv/Scripts/activate

from flask import Flask, jsonify, request, redirect, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv, dotenv_values
import os
import sendgrid
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from sendgrid.helpers.mail import *
from sendgrid.helpers.mail import Mail, Email, To, Content
import json
import stripe
import requests

#app instance
app = Flask(__name__)

#to connect to Next.js
CORS(app)

load_dotenv()

#api key shhhh
stripe.api_key = os.getenv('STRIPE_KEY')
endpoint_secret = os.getenv('STRIPE_ENDPOINT')
prodigi_key = os.getenv('PRODIGI_API_KEY')

heroku_server = os.getenv('BACKEND_SERVER')

@app.route('/')
def home():
    return '<h1>Welcome to the Photo Hosting App</h1>'

@app.route('/order_confirmation', methods=['POST'])
def order_confirmation():
    print('order confirmation')
    data = request.json['data']
    if data['order']['status']['stage'] == 'InProgress':
        print('sending  email')
        to_email = data['order']['recipient']['email']
        order_number = data['order']['id'][4:]
        
        items = data['order']['items']
        photos = []
        for item in items:
            for asset in item['assets']:
                photos.append({
                    "url": asset['url'],
                    'quantity': item['copies']
                })
        
        message = Mail(
            from_email='jshkmphoto@gmail.com',
            # to_emails=to_email,
            to_emails=to_email,
        )

        # Specify your template ID here
        message.template_id = os.getenv('SENDGRID_TEMPLATE_ID')

        dynamic_data = {
            "order_number" : order_number,
            "photos": photos
        }

        # Add dynamic data to the email
        message.dynamic_template_data = dynamic_data

        try:
            sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
            response = sg.send(message)
            print(f"Status Code: {response.status_code}")
            print(f"Body: {response.body}")
            print(f"Headers: {response.headers}")
        except Exception as e:
            print(f"Error: {str(e)}")
    else:
        print("Stage: " + data['order']['status']['stage'])
    return 'True'

@app.route('/send_message', methods=['POST'])
def send_message():
    contact = request.json
    message = Mail(
        from_email='jshkmphoto@gmail.com',
        to_emails='jshkmphoto@gmail.com',
        subject='Contact from ' + contact['email'],
        html_content=contact['message'])
    try:
        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        response = sg.send(message)
    except Exception as e:
        print(e)
    
    return jsonify({
        'result' : True
    })

@app.route('/photos/<filename>')
def serve_image(filename):
    return send_from_directory('static', filename)

#used to return shipping address from stripe webhook
@app.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data

    try:
        event = json.loads(payload)
    except json.decoder.JSONDecodeError as e:
        print('⚠️  Webhook error while parsing basic request.' + str(e))
        return jsonify(success=False)
    if endpoint_secret:
        # Only verify the event if there is an endpoint secret defined
        # Otherwise use the basic event deserialized with json
        sig_header = request.headers.get('stripe_signature')

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
            print('event creation success')
        except stripe.error.SignatureVerificationError as e:
            print('⚠️  Webhook signature verification failed.' + str(e))
            return jsonify(success=False)

    # Handle the event
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        
        line_items = json.loads(json.dumps((stripe.checkout.Session.list_line_items(session['id']).data)))
        
        products = {
            '8x10 Print': 'GLOBAL-PAP-8X10',
            '11x14 Print': 'GLOBAL-PAP-11X14',
            '5x7 Print': 'GLOBAL-PAP-5X7',
            # '8x8 Print': 'GLOBAL-PAP-8X8',
            '4x6 Print': 'GLOBAL-PAP-4X6'
        }

        images_list = json.loads(session['metadata']['images'])
        items = []
        for i, item in enumerate(line_items):
            items.append({
                "sku": products[item['description']],
                "copies": item['quantity'],
                "sizing": "fillPrintArea",
                "assets": [
                    {
                        "printArea": "default",
                        "url": heroku_server + images_list[i] + '.jpg'
                    }
                ]
            }
        )

        product = {
            "shippingMethod": "Budget",
            "recipient": {
            "address": {
                "line1": session['shipping_details']['address']['line1'],
                "line2": session['shipping_details']['address']['line2'],
                "postalOrZipCode": session['shipping_details']['address']['postal_code'],
                "countryCode": session['shipping_details']['address']['country'],
                "townOrCity": session['shipping_details']['address']['city'],
                "stateOrCounty": session['shipping_details']['address']['state']
            },
            "name": session['shipping_details']['name'],
            "email": session['customer_details']['email']
            },
            "items": items
        }
        target_url = os.getenv('PRINT_API_URL')
        headers = {
            'Content-Type': 'application/json',
            'X-API-Key': prodigi_key
        }
        response = requests.post(target_url, json=product, headers=headers)

    # ... handle other event types
    else:
        print('Unhandled event type {}'.format(event['type']))

    return jsonify(success=True)

#used to create checkout session and stripe hosted url when checkout is clicked
@app.route('/create_checkout', methods=['POST'])
def create_checkout_session():
    event = None
    payload = request.data
    try:
        event = json.loads(payload)
        items_json = json.loads(event['items'])
        items = []

        images_list = event['images']
        
        for i in range(len(items_json)):
            image = heroku_server + images_list[i] + '.jpg'
            items.append(
                {
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': 100 * items_json[i]['price'],
                        'product_data': {
                            'name': items_json[i]['size'] + ' Print',
                            'images': [image],
                        }
                    },
                    'quantity': items_json[i]['quantity'],
                    'adjustable_quantity': {
                        'enabled': True,
                        'minimum': 1,  # Minimum quantity allowed
                        'maximum': 10,  # Maximum quantity allowed
                    },
                }
            )

        checkout_session = stripe.checkout.Session.create(
            line_items=items,
            metadata={'images' : json.dumps(images_list)},
            mode='payment',
            shipping_address_collection = {
                'allowed_countries': ['US'],  # List of allowed countries
            },
            shipping_options=[
                {
                    "shipping_rate_data": {
                        "type": "fixed_amount",
                        "fixed_amount": {"amount": 595, "currency": "usd"},
                        "display_name": "Standard Shipping",
                    }
            }],
            success_url='https://www.jshkmphoto.com/thankyou',
            cancel_url='https://www.jshkmphoto.com',
        )
    except Exception as e:
        return str(e)

    app.logger.info(checkout_session.url)

    return jsonify({'url' : checkout_session.url})
    
if __name__ == '__main__':  
    # app.run(debug=True, port=8080)
    app.run()