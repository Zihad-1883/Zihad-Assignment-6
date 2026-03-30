import React from 'react';
import User from '../assets/user.png'
import Package from '../assets/package.png'
import Rocket from '../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className="bg-[#F9FAFC] p-25">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-4">Get Started in 3 Steps</h2>
                <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="container mx-auto grid grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <div className="text-right">
                        <span className="text-right text-white p-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full">01</span>
                    </div>
                    <div className="space-y-4 text-center mt-7">
                        <img className="bg-violet-200 rounded-full p-5 mx-auto" src={User} alt="" />
                        <h3 className="text-2xl font-bold">Create Account</h3>
                        <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <div className="text-right">
                        <span className="text-right text-white p-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full">02</span>
                    </div>
                    <div className="space-y-4 text-center mt-7">
                        <img className="bg-violet-200 rounded-full p-5 mx-auto" src={Package} alt="" />
                        <h3 className="text-2xl font-bold">Choose Products</h3>
                        <p className="text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <div className="text-right">
                        <span className="text-right text-white p-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full">03</span>
                    </div>
                    <div className="space-y-4 text-center mt-7">
                        <img className="bg-violet-200 rounded-full p-5 mx-auto" src={Rocket} alt="" />
                        <h3 className="text-2xl font-bold">Start Creating</h3>
                        <p className="text-[#627382]">Download and start using your premium tools immediately.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default GetStarted;