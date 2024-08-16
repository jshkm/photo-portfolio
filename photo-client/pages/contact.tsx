import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import MenuBar from '../components/MenuBar'

function Contact() {
  const [values, setValues] = useState({name: '', email: '', message: ''})
  const [submitReady, setSubmitReady] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  const send_message = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_SEND_MESSAGE!, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('values: ' + values.name + values.email + values.message)

    //connect to api to email me
    send_message()

    setValues({name: '', email: '', message: ''})
  }

  useEffect(() => {
    if (values.name != '' && values.email != '' && values.message != '') {
      setSubmitReady(true)
    } else {
      setSubmitReady(false)
    }
  }, [values])

  return (
    <div className='flex flex-col h-screen w-screen justify-between space-y-14 p-14'>
      <div className='flex flex-col sm:flex-row h-[75vh] sm:space-x-14 space-y-8 sm:space-y-0 overflow-hidden'>
        <div className='h-full min-h-[200px] w-full sm:w-1/2 relative'>
          <Image
            src="/photos/headshot.webp"
            alt="Headshot"
            layout='fill'
            objectFit='contain'
            className='object-center sm:object-left'
          />
        </div>
        <div className='flex flex-col justify-between items-start h-full w-full sm:w-1/2 overflow-auto space-y-4'>
          <h1 className='text-[#D5C4AF] archivo-black text-6xl'>NYC, NY</h1>
          <p className='jost text-xl'>open to inquires about anything! let&apos;s chat about photography, computer science, kendama, or whatever you want :) open to bookings in the nyc area!</p>
          <div>
            <div className='flex jost text-xl space-x-5 items-center'>
              <motion.a whileHover={{opacity: .5}}href='https://www.instagram.com/jsh.km'>
                <img className='max-h-5 max-w-5' src={'/icons/instagram.svg'} alt={'instagram icon'}></img>
              </motion.a>
              <p>jsh.km</p>
            </div>
            <div className='flex jost text-xl space-x-5 items-center'>
              <motion.a whileHover={{opacity: .5}}href='https://www.linkedin.com/in/jshkm10/'>
                <img className='max-w-5 max-h-5 w-5 h-5' src={'/icons/linkedin.svg'} alt={'linkedin icon'}></img>
              </motion.a>
              <p>jshkm10</p>
            </div>
          </div>
          <form className='w-full space-y-4' onSubmit={handleSubmit}>
            <div className='space-y-2 jost w-full'>
              <label className='text-xl font-semibold'>name<span className='text-red-500'>*</span>
                <input
                  onChange={handleChange}
                  name='name'
                  value={values.name}
                  type='text'
                  placeholder='john doe'
                  required
                  className='rounded-lg border border-[#E3E3E3] focus:outline-none w-full font-normal p-1'>
                </input>
              </label>
            </div>
            <div className='space-y-2 jost w-full'>
              <label className='text-xl font-semibold'>email<span className='text-red-500'>*</span>
                <input
                  onChange={handleChange}
                  name='email'
                  value={values.email}
                  type='email'
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Please enter a valid email address"
                  placeholder='address@gmail.com'
                  className='rounded-lg border border-[#E3E3E3] focus:outline-none w-full font-normal p-1'>
                </input>
              </label>
            </div>
            <div className='space-y-2 jost w-full'>
              <label className='text-xl font-semibold'>message<span className='text-red-500'>*</span>
                <textarea
                  onChange={handleChange}
                  name='message'
                  value={values.message}
                  required
                  placeholder='enter message...'
                  className='rounded-lg border border-[#E3E3E3] focus:outline-none w-full h-[200px] font-normal p-1'>
                </textarea>
              </label>
            </div>
            <div className='flex w-full justify-end'>
              <button
                className={`'jost text-xl  w-32 h-12 rounded-3xl ' ${submitReady ? 'bg-[#D5C4AF] text-black' : 'bg-[#EAE1D5] text-[#929292]'}`}
                type='submit'
                >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <MenuBar></MenuBar>
    </div>
  )
}

export default Contact