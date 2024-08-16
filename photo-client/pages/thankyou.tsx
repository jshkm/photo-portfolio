import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Data from '../src/data'
import { motion } from "framer-motion"

interface CartItem {
  id : string;
  price: number;
  size: string;
  quantity: number;
}

function ThankYou() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [subtotal, setSubtotal] = useState(0)

  const updateCart = () => {
    //sets cartItems to match local storage
    let value = localStorage.getItem("cartItems") || '[]'
    setCartItems(JSON.parse(value))
  }

  const thankyou = () => {
    router.push('/')
    localStorage.removeItem('cartItems')
  }

  useEffect(() => {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += (cartItems[i].price * cartItems[i].quantity)
    }
    setSubtotal(total)
  }, [cartItems])

  useEffect(() => {
    updateCart()
  }, [])

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-between space-y-14 p-14'>
      <div className='h-[75vh] flex flex-col justify-center items-center space-y-4'>
        <div className='text-center jost text-xl w-2/3'>
          <h1 className='text-3xl font-semibold'>thank you for your order!</h1>
          <p>really.</p>
          <p>it means the world to me that you bought one of my photos. it feels great to work on a project
            and have people see some of my life. you are awesome :)
          </p>
          <p>please check your email for an order and shipping confirmation.</p>
        </div>
        <div className='flex flex-col overflow-y-auto h-3/4 w-2/3 drop-shadow-md space-y-4'>
          {cartItems.map((cartItem, i) => (
            <div key={i} className='flex flex-row justify-between items-center h-full w-full'>
              <div className='h-full w-1/3 min-h-[120px] relative'>
                <Image
                  src={Data[cartItem.id].path}
                  alt={Data[cartItem.id].location + ' photo'} 
                  layout='fill'
                  objectFit='contain'
                  className={Data[cartItem.id].fit}
                />
              </div>
              <div className='flex flex-col justify-center items-start h-full w-1/3 min-w-[150px]'>
                <div className='flex space-x-4'>
                  <p className='jost font-semibold text-xl'>size</p>
                  <p className='font-normal jost text-xl'>{cartItem.size}</p>
                </div>
                <div className='flex space-x-4'>
                  <p className='jost font-semibold text-xl'>price</p>
                  <p className='font-normal jost text-xl'>${cartItem.price * cartItem.quantity}</p>
                </div>
                <div className='flex space-x-4 w-full'>
                  <p className='jost font-semibold text-xl'>quantity</p>
                  <p className='font-normal text-xl text-center'>{cartItem.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='jost text-2xl font-semibold'>
          <h1>total: <span className='font-normal'>${subtotal}</span></h1>
        </div>
      </div>
      <motion.button 
          className='text-7xl sm:text-8xl archivo-black font-normal text-center md:text-left'
          onClick={thankyou}
        >
      JOSH KIM</motion.button>
    </div>
  )
}

export default ThankYou