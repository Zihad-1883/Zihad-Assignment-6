import React, { use, useState } from 'react';
import ShoppingCart from '../assets/shopping-cart.png'
import Product from './Product';
import Cart from './Cart';



const Tools = ({productsPromise , buyNow , setBuyNow}) => {
    const products = use(productsPromise)
    // console.log(products);

    const [btnToggling , setBtnToggling] = useState(false)
    
    // console.log(buyNow);
    


    const handleProductBtn = () => {
        setBtnToggling(false);
        // return "bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
    }

    const handleCartBtn = () => {
        setBtnToggling(true);
        // return "bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
    }
    
    return (
        <div className="container mx-auto py-30">

            <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
                <p className='w-[35%] mx-auto opacity-70'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="flex justify-center items-center">
                    <button onClick={() => handleProductBtn()} className={`btn ${btnToggling === true ? "text-black" : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"} font-semibold  px-4 py-6 rounded-l-full `}>Products</button>
                    <button onClick={() => handleCartBtn()} className={`btn ${btnToggling === false ? "text-black" : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"} font-semibold px-4 py-6 rounded-r-full`}>Cart ({buyNow.length})</button>
                </div>
            </div>

            {
                btnToggling === false ? 
                <div className="grid w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    products.map(item => <Product item={item} buyNow={buyNow} setBuyNow={setBuyNow}></Product>)
                }
                </div>
                : <Cart buyNow={buyNow} setBuyNow={setBuyNow}></Cart>
            }

        </div>

    );
};

export default Tools;