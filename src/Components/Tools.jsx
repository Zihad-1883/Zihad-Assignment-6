import React, { use } from 'react';
import Portfolio from '../assets/portfolio.png'
import Check from '../assets/Check.png'



const Tools = ({productsPromise}) => {
    const products = use(productsPromise)
    console.log(products);
    // console.log(products.tag)

// const tagStyle = () => {
//     if(products.tag === "Best Seller"){
//         return "bg-[#FEF3C6] text-[#BB4D00]"
//     }
//     else if(products.tag === "Popular"){
//         return "bg-[#E1E7FF]"
//     }
//     else{
//         return "bg-black"
//     }
// }
     
    
    return (
        <div className="container mx-auto py-30">

            <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
                <p className='w-[35%] mx-auto opacity-70'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="flex justify-center items-center">
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white px-4 py-6 rounded-l-full">Products</button>
                    <button className="btn font-semibold px-4 py-6 rounded-r-full">Cart (2)</button>
                </div>
            </div>

            <div className="grid w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    products.map(product => <div className=" border-2 border-gray-300 rounded-lg p-6">
                        <div className="flex justify-between items-center">
                            <img className="my-4 border border-gray-300 p-4 rounded-full" src={product.image} alt="" />
                            <div className={`-mt-20 px-3 py-2 rounded-full ${product.tag === "Best Seller" && "bg-[#FEF3C6] text-[#BB4D00]"} ${product.tag === "Popular" && "bg-[#E1E7FF]"} ${product.tag === "New" && "bg-[#DBFCE7] text-[#0A883E]"}`}>
                                <span className={`${product.tag === "Popular" && "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text"}`}>{product.tag}</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                        <p className="text-[#627382] mb-4">{product.description}</p>
                        <h3 className="mb-4"><span className="text-2xl font-bold">${product.price}</span><span className="text-[#627382]">/{product.period}</span></h3>
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <img src={Check} alt="" />
                                <p className="text-[#627382]">{product.features[0]}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Check} alt="" />
                                <p className="text-[#627382]">{product.features[1]}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Check} alt="" />
                                <p className="text-[#627382]">{product.features[2]}</p>
                            </div>
                        </div>
                        <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white px-4 py-7 rounded-full w-full">Buy Now</button>
                    </div>)
                }
            </div>

        </div>

    );
};

export default Tools;