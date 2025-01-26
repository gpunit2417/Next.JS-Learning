import Navbar from "@/components/Navbar"
import Head from "next/head"

const product = () => {
  return (
    <div>
      <Navbar/>
      <Head>
        <title>Products Page</title>
      </Head>
        <h1>Hello from Product.js file</h1>
    </div>
  )
}

export default product