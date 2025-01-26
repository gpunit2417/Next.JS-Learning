import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
const blog = () => {
  return (
    <div>
      <Navbar/>
        <h1>Hello from blog.js file</h1>
        <Image src="/practiceImage.webp" layout='fill'/>
    </div>
  )
}

export default blog