import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Navbar/>
        <h1>Hello from about folder with file named index.js</h1>
    </div>
  )
}

export default index