import React from 'react';
import Group5 from '../assets/Group5.png'
import Play from '../assets/Play.png'
import BannerBg from '../assets/banner.png'

const Banner = () => {
    return (
        <>
           <div className="container mx-auto grid w-[90%] space-y-16 lg:flex justify-center items-center flex-wrap py-20">
                <div className="banner-left w-[50%] space-y-4">
                <button className="flex justify-center items-center gap-1 bg-[#E1E7FF] px-2 py-1 rounded-full"><img src={Group5} alt=""></img><span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text'>New: AI-Powered Tools Available</span></button>
                <h1 className="text-[72px]/[80px] font-bold max-w-[634px] min-h-[168px]">Supercharge Your Digital Workflow</h1>
                <p className="text-[18px] max-w-[640px] min-h-[84px] opacity-55">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                <div className="flex items-center gap-4">
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white rounded-full px-4 py-6">Explore Products</button>
                    <button className="btn bg-transparent font-semibold text-white rounded-full px-4 py-6 border border-[#9514fa]"><img src={Play} alt="" /><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">Watch Demo</span></button>
                </div>
                </div>

                <div className="banner-right">
                    <img src={BannerBg} alt="" />
                </div>
           </div>
        </>
    );
};

export default Banner;