import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Stats from './Components/Stats'
import Tools from './Components/Tools'

const getProducts = async() => {
    const res = await fetch('/products.json');
    return res.json()
}

const productsPromise = getProducts()

function App() {
  
  const [buyNow , setBuyNow] = useState([])
  console.log(buyNow.length);
  

  return (
    <>
       <Navbar buyNow={buyNow}></Navbar>
       <Banner></Banner>
       <Stats></Stats>
       <Suspense fallback={<p>Loading</p>}>
          <Tools productsPromise={productsPromise} buyNow={buyNow} setBuyNow={setBuyNow}></Tools>
       </Suspense>
    </>
  )
}

export default App
