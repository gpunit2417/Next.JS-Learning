import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

const contacts = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Navbar/>
        <h1>Hello from contact.js file with function name contacts</h1>
    </div>
  )
}

export default contacts