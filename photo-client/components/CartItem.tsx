import React from 'react'
import Image from 'next/image'
import Data from '../src/data'
import { useState, useEffect } from 'react'

interface CartItem {
  id : string;
  price: number;
  size: string;
  quantity: number;
}

interface CartItemProps {
  cartItem: CartItem;
  index: number;
  setSubtotal: Function;
  cartItems: CartItem[];
  setCartItems: Function;
}

const CartItem = ({cartItem, index, setSubtotal, cartItems, setCartItems} : CartItemProps) => {
  const id = cartItem.id

  const [item, setItem] = useState(cartItem)

  const updateCart = () => {
    //sets cartItems to match local storage
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || '[]'))
  }

  const deleteItem = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((_, i) => i !== index)))
    updateCart()
  }
  
  useEffect(() => {
    cartItems[index] = item
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    updateCart()
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += (cartItems[i].price * cartItems[i].quantity)
    }
    setSubtotal(total)
  }, [item])

  return (
    <div className='flex bg-white w-full h-36 rounded-xl items-center justify-between p-4 space-x-4 overflow-auto'>
      <div className='w-1/3 h-full relative min-w-[100px]'>
        <Image
          src={Data[id].path}
          alt={Data[id].location + ' photo'} 
          layout='fill'
          objectFit='contain'
          className={Data[id].fit}
        />
      </div>
      <div className='flex flex-col justify-around h-full w-1/3 min-w-[150px]'>
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
          <p className='font-normal border text-xl border-[#E3E3E3] h-8 aspect-square text-center rounded-lg'>{cartItem.quantity}</p>
        </div>
        <div className='flex justify-start space-x-1'>
            <button onClick={() => setItem((prevItem) => ({
              ...prevItem,
              quantity: prevItem.quantity > 0 ? prevItem.quantity - 1 : 0
            }))}>
              <img className={'min-w-[29px]'} src={'/icons/minus.svg'} alt={'minus icon'}></img>
            </button>
            <button onClick={() => setItem((prevItem) => ({
              ...prevItem,
              quantity: prevItem.quantity < 10 ? prevItem.quantity + 1 : 10
            }))}>
              <img className={'min-w-[29px]'} src={'/icons/plus.svg'} alt={'plus icon'}></img>
            </button>
          </div>
      </div>
      <div className='flex flex-col min-w-[90px]'>
        <button
          onClick={deleteItem}>
          <p className='text-red-500 underline'>delete</p>
        </button>
      </div>
    </div>
  )
}

export default CartItem