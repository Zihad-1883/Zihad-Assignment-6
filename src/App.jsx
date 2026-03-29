import { Suspense } from 'react'
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


  return (
    <>
       <Navbar></Navbar>
       <Banner></Banner>
       <Stats></Stats>
       <Suspense fallback={<p>Loading</p>}>
          <Tools productsPromise={productsPromise}></Tools>
       </Suspense>
    </>
  )
}

export default App
