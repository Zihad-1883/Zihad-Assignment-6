import React from 'react';

const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-25 text-center">
            <div className='w-[90%] container mx-auto'>
                <div className='space-y-4'>
                    <h2 className='text-[40px] font-bold text-white'>Ready to Transform Your Workflow?</h2>
                    <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br></br>Start your free trial today.</p>
                </div>
                <div className='flex justify-center mt-15 space-x-4 space-y-4 mb-4'>
                    <button className="btn bg-white font-semibold text-white rounded-full py-6"><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">Explore Products</span></button>
                    <button className='btn bg-transparent text-white rounded-full py-6 px-6'>View Pricing</button>
                </div>
                <div>
                    <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
                </div>
        </div>
    );
};

export default Workflow;