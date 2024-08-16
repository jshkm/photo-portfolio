import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import CartModal from './CartModal';
import { useModalContext } from '../utils/modalContext';

const MenuBar = () => {
    const router = useRouter();
    const [path, setPath] = useState('')
    const [cartAmount, setCartAmount] = useState(0)
    const [isOpen, setIsOpen] = useModalContext()

    useEffect(() => {
        setPath(window.location.pathname)
    }, [])

    useEffect(() => {
        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            const items = JSON.parse(cartItems);
            setCartAmount(items.length);
        } else {
            setCartAmount(0);
        }
    }, [isOpen])

    return (
        <div className='flex flex-col justify-between items-center md:flex-row'>
            <motion.button 
                // whileHover={{opacity: .5}}
                className='text-7xl sm:text-8xl archivo-black font-normal text-center md:text-left'
                onClick={() => router.push('/')}
            >
                JOSH KIM</motion.button>
            <div className= 'flex flex-col items-center justify-center sm:space-x-24 sm:flex-row jost font-normal text-3xl space-y-2 sm:space-y-0'>
                <motion.button 
                    whileHover={{opacity: .5}}
                    className={`${path == '/photos' && 'font-bold'}`}
                    onClick={() => router.push('/photos')}
                >
                    photos</motion.button>
                <motion.button 
                    whileHover={{opacity: .5}}
                    className={`${path == '/shop' && 'font-bold'}`}
                    onClick={() => router.push('/shop')}
                >
                    shop</motion.button>
                <motion.button 
                    whileHover={{opacity: .5}}
                    className={`${path == '/contact' && 'font-bold'}`}
                    onClick={() => router.push('/contact')}
                >
                    contact</motion.button>

                <motion.div
                    className={`flex ${cartAmount > 0 && 'translate-x-2 sm:translate-x-0'}`} 
                    whileHover={{opacity: .5}}
                    >
                    <CartModal></CartModal>
                    {cartAmount > 0 && (
                        <p className='-translate-x-5 -translate-y-3 text-white jost font-semibold text-xl bg-red-500 w-[26px] h-[26px] text-center rounded-full'>{cartAmount}</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default MenuBar;