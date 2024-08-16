interface Data {
    path: string;
    fit: string;
    aspect: string;
    location: string;
}

interface DataType {
    [key : string] : Data;
}

const data: DataType = {
    'a1': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a2': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'atlanta'},
    'a3': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a4': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a5': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a6': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'n1': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'new york city'},
    'n10': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'new york city'},
    'n11': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'new york city'},
    'n12': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'new york city'},
    'n13': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'new york city'},
    'n14': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'new york city'},
    'n15': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'new york city'},
    'a20': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a10': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a11': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a12': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a13': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'atlanta'},
    'a14': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a15': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'atlanta'},
    'a16': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a17': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a18': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a19': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a21': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'atlanta'},
    'b1': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b10': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b11': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'berlin'},
    'b12': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'berlin'},
    'b14': {'path': '/path', 'fit': 'object-bottom', 'aspect': '4/5', 'location': 'berlin'},
    'b15': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'berlin'},
    'b16': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b17': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'berlin'},
    's1': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's2': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'san francisco'},
    's3': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'san francisco'},
    's5': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'san francisco'},
    's10': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's11': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's12': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's13': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's14': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's6': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's7': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'san francisco'},
    'n3': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'new york city'},
    'n4': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'new york city'},
    'n5': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'new york city'},
    'n6': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'new york city'},
    'n7': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'new york city'},
    'n8': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'new york city'},
    'n9': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'new york city'},
    'a22': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a23': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a24': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a25': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a8': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'a9': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'atlanta'},
    'b19': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b2': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b20': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b3': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b4': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b5': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b6': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'berlin'},
    'b7': {'path': '/path', 'fit': 'object-center', 'aspect': '4/5', 'location': 'berlin'},
    'b8': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'berlin'},
    'b9': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'berlin'},
    's8': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'},
    's9': {'path': '/path', 'fit': 'object-center', 'aspect': '5/4', 'location': 'san francisco'}
}

export default data