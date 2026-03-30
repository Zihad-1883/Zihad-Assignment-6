import React from 'react';
import Check from '../assets/Check.png'
import CheckWhite from '../assets/CheckWhite.png'

const Pricing = () => {
    return (
        <div className="my-25">
            <div className='container mx-auto w-[90%] md:w-full'>
                <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

                <div className="bg-[#F9FAFC] p-6 flex flex-col justify-between border-1 border-gray-200 rounded-2xl transition-transform duration-200 hover:scale-105">
                    <div>
                        <h4 className="text-2xl font-bold mb-1">Starter</h4>
                        <p className="text-[#627382]">Perfect for getting started</p>
                    </div>
                    <h3 className="my-4"><span className="text-[40px] font-bold">$0</span><span className="text-[#627382]">/month</span></h3>
                    <div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Access to 10 free tools</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Basic templates</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Community support</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">1 project per month</p>
                        </div>
                    </div>
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white rounded-full w-full mt-16">Get Started Free</button>
                </div>

                <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex flex-col justify-between p-6 border-1 border-gray-200 rounded-2xl relative transition-transform duration-200 hover:scale-105">
                    <span className="text-[#BB4D00] bg-[#FEF3C6] px-2 py-1 rounded-full absolute -top-5 left-35 xl:left-46">Most Popular</span>
                    <div>
                        <h4 className="text-2xl font-bold mb-1 text-white">Pro</h4>
                        <p className="text-[#627382] text-white">Best for professionals</p>
                    </div>
                    <h3 className="my-4"><span className="text-[40px] font-bold text-white">$29</span><span className="text-[#627382] text-white">/month</span></h3>
                    <div>
                        <div className="flex items-center gap-2">
                            <img src={CheckWhite} alt="" />
                            <p className="text-[#627382] text-white">Access to all premium tools</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={CheckWhite} alt="" />
                            <p className="text-[#627382] text-white">Unlimited templates</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={CheckWhite} alt="" />
                            <p className="text-[#627382] text-white">Priority support</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={CheckWhite} alt="" />
                            <p className="text-[#627382] text-white">Unlimited projects</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={CheckWhite} alt="" />
                            <p className="text-[#627382] text-white">Cloud sync</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={CheckWhite} alt="" />
                            <p className="text-[#627382] text-white">Advanced analytics</p>
                        </div>
                    </div>
                    <button className="btn bg-white font-semibold text-white rounded-full py-4 mt-6 w-full"><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">Start Pro Trial</span></button>
                </div>

                <div className="bg-[#F9FAFC] p-6 flex flex-col justify-between border-1 border-gray-200 rounded-2xl transition-transform duration-200 hover:scale-105">
                    <div>
                        <h4 className="text-2xl font-bold mb-1">Enterprise</h4>
                        <p className="text-[#627382]">For teams and businesses</p>
                    </div>
                    <h3 className="my-4"><span className="text-[40px] font-bold">$99</span><span className="text-[#627382]">/month</span></h3>
                    <div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Everything in Pro</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Team collaboration</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Custom integrations</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Dedicated support</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">SLA guarantee</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="" />
                            <p className="text-[#627382]">Custom branding</p>
                        </div>
                    </div>
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white rounded-full w-full mt-16">Contact Sales</button>
                </div>
          
            </div>
            </div>
        </div>
    );
};

export default Pricing;