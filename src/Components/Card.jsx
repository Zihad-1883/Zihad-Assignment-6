import React from 'react';
import Check from '../assets/Check.png'
import { toast } from 'react-toastify';

const Card = ({item , buyNow , setBuyNow}) => {

     const handleBuyNow = () => {
        setBuyNow([...buyNow , item]);
        toast.success('Added To Cart')
    }
    const isClicked = buyNow.some(e => e.id === item.id)
    console.log(isClicked);
    

    return (
        <div>
            <div className="border-2 border-gray-300 rounded-lg p-6 transition-transform duration-200 hover:scale-105">
                        <div className="flex justify-between items-center">
                            <img className="my-4 border border-gray-300 p-4 rounded-full" src={item.image} alt="" />
                            <div className={`-mt-20 px-3 py-2 rounded-full ${item.tag === "Best Seller" && "bg-[#FEF3C6] text-[#BB4D00]"} ${item.tag === "Popular" && "bg-[#E1E7FF]"} ${item.tag === "New" && "bg-[#DBFCE7] text-[#0A883E]"}`}>
                                <span className={`${item.tag === "Popular" && "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text"}`}>{item.tag}</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
                        <p className="text-[#627382] mb-4">{item.description}</p>
                        <h3 className="mb-4"><span className="text-2xl font-bold">${item.price}</span><span className="text-[#627382]">/{item.period}</span></h3>
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <img src={Check} alt="" />
                                <p className="text-[#627382]">{item.features[0]}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Check} alt="" />
                                <p className="text-[#627382]">{item.features[1]}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Check} alt="" />
                                <p className="text-[#627382]">{item.features[2]}</p>
                            </div>
                        </div>
                        <button onClick={() => handleBuyNow()}
                                disabled={isClicked}
                                className={`btn ${isClicked ? "bg-linear-to-r from-green-500 to-green-900" : "bg-linear-to-r from-[#4f39f6] to-[#9514fa]"}  font-semibold text-white px-4 py-7 rounded-full w-full`}>{isClicked ? "Added To Cart" : "Buy Now"}</button>
                    </div>
        </div>
    );
};

export default Card;