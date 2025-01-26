import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
const blog = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Head>
        <title>Blog Page</title>
      </Head>
      <Navbar/>
        <h1>Hello from blog.js file</h1>
        {/* <Image src="/practiceImage.webp" layout='fill'/> */}
        <Image src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="300" width="500"/>
    </div>
  )
}

export default blog