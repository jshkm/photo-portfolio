import MenuBar from '../components/MenuBar'
import Scroller from '../components/Scroller'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import React from 'react'
import Cards from '../src/Cards'

function Photos() {
  const places = [
    {title: 'NYC, NY', location: 'new york city'},
    {title: 'ATL, GA', location: 'atlanta'},
    {title: 'BER, GER', location: 'berlin'},
    {title: 'SF, CA', location: 'san francisco'},
  ]

  const [selectedLocation, setSelectedLocation] = useState<string>(places[0].location)
  const [isVisible, setIsVisible] = useState(true)

  const photoTransition = (location : string) => {
    if (location != selectedLocation) {
      setSelectedLocation(location)
      setIsVisible(false)
    }
  }

  return (
    <div className='flex flex-col h-screen w-screen justify-between space-y-14 p-14'>
      <div className='flex h-[75vh] justify-between'>
        <div className='flex flex-col items-start justify-around h-full archivo-black text-5xl'>
          {places.map((place, i) => (
            <motion.button
              key={i}
              initial={{opacity: .4}}
              animate={{opacity: selectedLocation == place.location ? 1 : .4}}
              whileHover={{opacity: 1}}
              onClick={() => photoTransition(place.location)}>
                {place.title}
            </motion.button>
          ))}
        </div>
        <AnimatePresence onExitComplete={() => setIsVisible(true)}>
          {isVisible && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: .3}}
              className='w-1/2 xl:w-3/4 lg:w-2/3'>
              <Scroller cards={Cards[selectedLocation]}></Scroller>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <MenuBar></MenuBar>
    </div>
  )
}

export default Photos