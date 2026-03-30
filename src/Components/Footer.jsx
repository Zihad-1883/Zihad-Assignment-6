import React from 'react';
import Logo from '../assets/DigiToolsFooter.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-25 px-25 pb-10'>
            <div className='container mx-auto'>

                <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-15 mb-20'>

                    <div className='space-y-4 col-span-2'>
                        <img src={Logo} alt="" />
                        <p className='text-white max-w-[350px] min-h-[72px]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-white font-medium text-xl'>Product</h3>
                        <h4 className='text-white'>Features</h4>
                        <h4 className='text-white'>Pricing</h4>
                        <h4 className='text-white'>Templates</h4>
                        <h4 className='text-white'>Integrations</h4>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-white font-medium text-xl'>Company</h3>
                        <h4 className='text-white'>About</h4>
                        <h4 className='text-white'>Blog</h4>
                        <h4 className='text-white'>Careers</h4>
                        <h4 className='text-white'>Press</h4>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-white font-medium text-xl'>Resources</h3>
                        <h4 className='text-white'>Documentation</h4>
                        <h4 className='text-white'>Help Center</h4>
                        <h4 className='text-white'>Community</h4>
                        <h4 className='text-white'>Contact</h4>
                    </div>

                    <div>
                        <h3 className='text-white font-medium text-xl mb-4'>Social Links</h3>
                        <div className='flex items-center gap-3'>
                            <img src={Instagram} alt="" />
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                        </div>
                    </div>
                </div>

                <hr className='text-white opacity-20 mb-8'/>

                <div className='flex flex-wrap text-center lg:text-left justify-between items-center gap-6'>
                    <div>
                        <p className='text-[#FAFAFA] opacity-60'>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
                        <p className='text-[#FAFAFA] opacity-60'>Privacy Policy</p>
                        <p className='text-[#FAFAFA] opacity-60'>Terms of Service</p>
                        <p className='text-[#FAFAFA] opacity-60'>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;