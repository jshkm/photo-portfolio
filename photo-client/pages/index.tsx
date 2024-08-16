import React, { useEffect, useState, useRef } from 'react'
import MenuBar from '../components/MenuBar'
import HomeScroller from '../components/Scroller'
import Cards from '../src/Cards'

function index() {
  return (
    <div className='flex flex-col h-screen w-screen justify-between space-y-14 p-14'>
      <div
        className='h-[75vh]'
        >
        <HomeScroller cards={Cards.home}></HomeScroller>
      </div>
      <MenuBar></MenuBar>
    </div>
  )
}

export default index