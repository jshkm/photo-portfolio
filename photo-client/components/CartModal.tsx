import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useModalContext } from '../utils/modalContext';
import Data from '../src/data'

interface CartItemType {
  quantity: number;
  name: string;
  price: number;
  id: string;
  size: string;
}

function CartModal() {
  const [isVisible, setIsVisible] = useState(true)
  const [subtotal, setSubtotal] = useState(0)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [isOpen, setIsOpen] = useModalContext()
  
  const updateCart = () => {
    //sets cartItems to match local storage
    let value = localStorage.getItem("cartItems") || '[]'
    // console.log(localStorage)
    setCartItems(JSON.parse(value))
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleBack = () => {
    // sets animation to false so modal exits
    setIsVisible(false)

    // deletes any items with quant 0 from cartItems list
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].quantity == 0) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((_, index) => index !== i)))
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      updateCart()
      setIsVisible(true)
      let total = 0
      for (let i = 0; i < cartItems.length; i++) {
        total += (cartItems[i].price * cartItems[i].quantity)
      }
      setSubtotal(total)
    }
  }, [isOpen])

  useEffect(() => {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += (cartItems[i].price * cartItems[i].quantity)
    }
    setSubtotal(total)

  }, [cartItems])

  const create_checkout = async () => {
    const items = JSON.stringify(cartItems)
    const images = []
    for (let i = 0; i < cartItems.length; i++) {
      let path = Data[cartItems[i].id].path
      path = path.replace(/\.webp$/, "")
      images.push(path)
    }
    const order = {'items' : items, 'images' : images} 
    const url = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT
    const response = await fetch(url!, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    window.location.href = data.url
  }

  return (
    <>
      <motion.button
        onClick={handleOpen}
        disabled={isOpen}>
        <img className={'cart-icon'} src={'/icons/cart.svg'} alt={'cart icon'}></img>
      </motion.button>
      <Dialog open={isOpen} onClose={handleBack} className="relative">
        <AnimatePresence onExitComplete={() => setIsOpen(false)}>
          {isVisible && (
            <motion.div
              key='modal'
              initial={{x: '100%'}}
              animate={{x: '0%'}}
              transition={{ type: "spring", stiffness: 77, damping: 16 }}
              exit={{x: '100%'}}
              className="fixed inset-0 flex items-center justify-end">
            <DialogPanel className="border h-screen w-screen md:w-[33vw] bg-[#EAE1D5] rounded-xl drop-shadow-sm">
              <div className='flex flex-col justify-between w-full h-full p-8'>
                <div className='flex flex-col justify-between h-3/4 space-y-4'>
                  <button onClick={handleBack}>
                    <img className='max-h-8' src={'/icons/back.svg'} alt={'back icon'}></img>
                  </button>
                  <h1 className='text-6xl archivo-black font-extrabold'>cart</h1>
                  <p className='jost font-normal'>only ships inside the united states!</p>
                  <div className='space-y-4 overflow-y-auto h-3/4 drop-shadow-md rounded-xl'>
                    {cartItems.map((cartItem, index) => (
                      <CartItem cartItem={cartItem} index={index} key={index} setSubtotal={setSubtotal} cartItems={cartItems} setCartItems={setCartItems}></CartItem>
                    ))}
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <h2 className='font-semibold jost text-xl'>subtotal</h2>
                    <p className='jost font-normal text-xl'>${subtotal}</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h2 className='font-semibold jost text-xl'>shipping</h2>
                    <p className='jost font-normal text-xl'>$5.95</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h2 className='font-bold jost text-xl'>total</h2>
                    <p className='jost font-semibold text-xl'>${subtotal + 5.95}</p>
                  </div>
                </div>
                <div className='flex w-full justify-end'>
                  <button
                    className='jost text-xl  w-full h-12 rounded-3xl bg-[#D5C4AF] text-black'
                    onClick={create_checkout}
                    disabled={cartItems.length == 0}>
                    checkout
                  </button>
                </div>
              </div>
            </DialogPanel>
          </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </>
  )
}

export default CartModal