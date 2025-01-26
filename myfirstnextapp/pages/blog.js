import Navbar from '@/components/Navbar'
import React from 'react'
// import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};


const blog = ({data}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Head>
        <title>Blog Page</title>
      </Head>
      <Navbar/>
        <h1>Hello from blog.js file</h1>
        {/* <Image src="/practiceImage.webp" layout='fill'/> */}
        {/* <Image src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="300" width="500"/> */}

        {data.map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default blog