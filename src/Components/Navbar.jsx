import React from 'react';
import Logo from '../assets/DigiTools.png'
import ShoppingCart from '../assets/shopping-cart.png'

const Navbar = ({buyNow}) => {
    return (
        <div className="shadow-xl sticky top-0 z-10 bg-white">
            <div className="navbar py-6 container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className="font-semibold">Products</li>
                        <li className="font-semibold">Features</li>
                        <li className="font-semibold">Pricing</li>
                        <li className="font-semibold">Testimonials</li>
                        <li className="font-semibold">FAQ</li>
                    </ul>
                    </div>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
               
               <div className="navbar-middle hidden lg:flex">
                    <ul className="flex justify-center items-center gap-8">
                        <li className="font-semibold">Products</li>
                        <li className="font-semibold">Features</li>
                        <li className="font-semibold">Pricing</li>
                        <li className="font-semibold">Testimonials</li>
                        <li className="font-semibold">FAQ</li>
                    </ul>
               </div>

                <div className="navbar-end">
                    <div className="flex justify-center items-center gap-4 relative">
                        <img src={ShoppingCart} alt="ShoppingCart" />
                        <span className="absolute top-0 left-4 text-green-900 font-bold">{buyNow.length === 0 ? "" : 
                        buyNow.length}</span>
                        <p className="mx-2">Login</p>
                        <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white rounded-full">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;