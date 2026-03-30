import React from 'react';

const Cart = ({buyNow , setBuyNow}) => {
    // console.log(buyNow);
    const totalPrice = buyNow.reduce((sum , item) => sum + item.price , 0)
    // console.log(totalPrice)
    // console.log(buyNow)
    const removeCart = (item) => {
        // console.log(item)
        const filteredArray = buyNow.filter(e => e.id !== item.id);
        // console.log(filteredArray)
        setBuyNow(filteredArray);

    }

    return (
        <div className='border border-gray-300 rounded-2xl px-10 py-5 my-10'>
            <div className="my-10">
                <h3 className="text-2xl font-bold mb-6">Your Cart</h3>
                {
                    buyNow.length === 0 ? 
                    <div className="flex justify-center items-center p-40">
                        <h2 className="text-4xl">Your Cart Is Empty</h2>
                    </div> : 
                    <div className="space-y-4">
                        {
                            buyNow.map(item => 
                            <div className="bg-[#F9FAFC] flex justify-between items-center p-5 rounded-2xl">
                                <div className="flex justify-center items-center gap-4">
                                    <div className="p-3 bg-white border border-white rounded-full">
                                        <img src={item.image}></img>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold mb-1">{item.name}</h5>
                                        <p className="text-[#627382]">${item.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => removeCart(item)} className="text-[#FF3980] font-bold">Remove</button>
                                </div>
                            </div>)
                        }
                        
                        
                        <div className="flex justify-between items-center my-6">
                            <p className="text-[#627382]">Total :</p>
                            <h5 className="text-2xl font-bold">${totalPrice}</h5>
                        </div>
                        <button onClick={() => setBuyNow([])} className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white px-4 py-7 rounded-full w-full">Proceed to Checkout</button>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Cart;