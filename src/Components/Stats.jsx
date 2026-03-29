import React from 'react';

const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            <div className="grid grid-cols-1 space-y-4 text-center lg:flex justify-around items-center p-10 container mx-auto">
                <div>
                    <h2 className="text-[60px] font-bold text-white">50K+</h2>
                    <p className="text-2xl font-medium text-white opacity-80">Active Users</p>
                </div>
                <div className="divider divider-warning opacity-20 hidden lg:flex divider-horizontal"></div>
                <div>
                    <h2 className="text-[60px] font-bold text-white">200+</h2>
                    <p className="text-2xl font-medium text-white opacity-80">Premium Tools</p>
                </div>
                <div className="divider divider-warning opacity-20 hidden lg:flex divider-horizontal"></div>
                 <div>
                    <h2 className="text-[60px] font-bold text-white">4.9</h2>
                    <p className="text-2xl font-medium text-white opacity-80">Rating</p>
                </div>
            </div>
                <hr />
        </div>
    );
};

export default Stats;