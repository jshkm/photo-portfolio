import React from 'react'
import ShopScroller from '../components/ShopScroller'
import MenuBar from '../components/MenuBar'
import Dropdown from '../components/Dropdown'
import Cards from '../src/ShopCards'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";

function Shop() {
  const places = [
    { location: 'all'},
    { location: 'atlanta'},
    { location: 'new york city'},
    { location: 'berlin'},
    { location: 'san francisco'}
  ]
  const [selectedPlace, setSelectedPlace] = useState(places[0])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(false)
  }, [selectedPlace])

  return (
    <div className='flex flex-col h-screen w-screen justify-between space-y-14 p-14'>
      <div className='flex flex-col h-[75vh] space-y-2'>
        <div className='pb-[26px]'>
          <Dropdown places={places} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}></Dropdown>
        </div>
        <AnimatePresence onExitComplete={() => setIsVisible(true)}>
          {isVisible && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: .3}}
              className='flex h-1/2'>
              <ShopScroller cards={Cards.top} location={selectedPlace.location}></ShopScroller>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence onExitComplete={() => setIsVisible(true)}>
          {isVisible && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: .3}}
              className='flex h-1/2'>
              <ShopScroller cards={Cards.bottom} location={selectedPlace.location}></ShopScroller>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <MenuBar></MenuBar>
    </div>
  )
}

export default Shop