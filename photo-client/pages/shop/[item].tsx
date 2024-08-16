import React from 'react'
import { useRouter } from 'next/router'
import Data from '../../src/data'
import MenuBar from '../../components/MenuBar'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { useModalContext } from '../../utils/modalContext';

interface CartItem {
  id : string;
  price: number;
  size: string;
  quantity: number;
}

interface Places {
  [key: string]: string;
}

function Item() {
  const router = useRouter();

  const places: Places = {
    'new york city': 'NYC, NY',
    'atlanta': 'ATL, GA',
    'berlin': 'BER, GER',
    'san francisco': 'SF, CA'
  }

  const id = router.query.item as string
  const [location, setLocation] = useState('')
  const [submitReady, setSubmitReady] = useState(false)
  const [material, setMaterial] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState(0)
  const [item, setItem] = useState({
    'id' : id,
    'price': 0,
    'size': '',
    'quantity': 0
  })

  useEffect(() => {
    if (router.isReady && id && Data[id]) {
      setLocation(places[Data[id].location]);
      setItem(prevItem => ({
        ...prevItem,
        id: id
      }));
    } else {
      console.error(`Item with id ${id} not found`);
      // Optionally handle the error, e.g., redirect or show a message
    }
  }, [router.isReady, id]);

  // const [cartItems, setCartItems] = useCartContext()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useModalContext()

  const updateCart = () => {
    //sets cartItems to match local storage
    let value = localStorage.getItem("cartItems") || '[]'
    // console.log(localStorage)
    setCartItems(JSON.parse(value))
  }

  const handlePrice = (printSize : string) => {
    switch (printSize) {
      case '4x6':
        setPrice(10)
        setSize(printSize)
        break
      case '5x7':
        setPrice(12)
        setSize(printSize)
        break
      case '8x8':
        setPrice(20)
        setSize(printSize)
        break
      case '8x10':
        setPrice(20)
        setSize(printSize)
        break
      case '11x14':
        setPrice(25)
        setSize(printSize)
        break
    }
  }

  useEffect(() => {
    updateCart()
  }, [])

  useEffect(() => {
    setItem({
      'id': id,
      'price': price,
      'size': size,
      'quantity': 1
    })
  }, [price, size])

  const addToCart = () => {
    console.log(item)

    let flag = true
    // checks if item is in cartItems already based off id and size, and then updates quant if it exists
    for (let i = 0; i < cartItems.length; i++) {
      if (id == cartItems[i].id && size == cartItems[i].size) {
        cartItems[i].quantity = cartItems[i].quantity + 1
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        flag = false
        break
      }
    }

    // if cartItem didn't exist already, add to end of cart
    if (flag) {
      console.log('cart items')
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]))
      updateCart()
    }
    
    setIsOpen(true)
  }

  useEffect(() => {
    if (size != '') {
      setSubmitReady(true)
    }
  }, [size, material])

  const imagePath = Data[id]?.path;
  const imageFit = Data[id]?.fit;
  const imageLocation  = Data[id]?.location 

  return (
    <div className='flex flex-col h-screen w-screen justify-between space-y-14 p-14'>
      <div className='h-[75vh] flex flex-col sm:flex-row overflow-hidden'>
        <div className='w-full sm:w-2/3 h-1/2 sm:h-full relative'>
          <Image
            src={imagePath}
            alt={imageLocation + ' photo'} 
            layout='fill'
            objectFit='contain'
            className={imageFit}
          />
        </div>
        <div className='flex flex-col justify-between sm:h-full w-full sm:w-1/3 px-12 space-y-10 overflow-auto'>
          <h1 className='archivo-black text-[#D5C4AF] text-6xl font-extrabold'>{location}</h1>
          {/* <p className='jost font-normal text-xl'>{Data[id].description}</p> */}
          
          <div>
            <p className='jost font-semibold text-xl'>price:</p>
            <p className='jost font-normal text-xl'>${item.price == 0 ? '10' : item.price}</p>
          </div>
          <div>
            <h2 className='jost font-semibold text-xl'>size<span className='text-red-500'>*</span></h2>
            <div className='flex flex-col w-full justify-between space-y-4'>
              <div className='flex w-full justify-center space-x-0 flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0'>
                <motion.button 
                  whileHover={{opacity: .7}}
                  onClick={() => handlePrice('4x6')}
                  className={`jost font-normal text-xl border border-[#A3A3A3] rounded-3xl w-full lg:w-1/3 h-10 min-w-[72px] ${size == '4x6' && 'bg-[#D5C4AF] text-black'}`}>4 x 6</motion.button>
                <motion.button 
                  whileHover={{opacity: .7}}
                  onClick={() => handlePrice('5x7')}
                  className={`jost font-normal text-xl border border-[#A3A3A3] rounded-3xl w-full lg:w-1/3 h-10 min-w-[72px] ${size == '5x7' && 'bg-[#D5C4AF] text-black'}`}>5 x 7</motion.button>
                {/* <motion.button 
                  whileHover={{opacity: .7}}
                  onClick={() => handlePrice('8x8')}
                  className={`jost font-normal text-xl border border-[#A3A3A3] rounded-3xl w-full lg:w-1/3 h-10 min-w-[72px] ${size == '8x8' && 'bg-[#D5C4AF] text-black'}`}>8 x 8</motion.button> */}
              </div>
              <div className='flex w-full justify-center space-x-0 flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0'>
                <motion.button 
                  whileHover={{opacity: .7}}
                  onClick={() => handlePrice('8x10')}
                  className={`jost font-normal text-xl border border-[#A3A3A3] rounded-3xl w-full lg:w-1/3 h-10 min-w-[72px] ${size == '8x10' && 'bg-[#D5C4AF] text-black'}`}>8 x 10</motion.button>
                <motion.button 
                  whileHover={{opacity: .7}}
                  onClick={() => handlePrice('11x14')}
                  className={`jost font-normal text-xl border border-[#A3A3A3] rounded-3xl w-full lg:w-1/3 h-10 min-w-[72px] ${size == '11x14' && 'bg-[#D5C4AF] text-black'}`}>11 x 14</motion.button>
              </div>
            </div>
          </div>
          <p className='jost font-normal text-xl'>all prints are adjusted to fit the chosen size. this may result in some of the image being cut off to fit the size.</p>
          <motion.button
            disabled={!submitReady}
            whileHover={ submitReady ? {opacity: .7} : {}}
            onClick={addToCart}
            className={`jost font-normal text-xl w-full h-10 rounded-3xl min-w-[72px] ${submitReady ? 'bg-[#D5C4AF] text-black' : 'bg-[#EAE1D5] text-[#929292]'}`}>
              add to cart
          </motion.button>
        </div>
      </div>
      <MenuBar></MenuBar>
    </div>
  )
}

export default Item