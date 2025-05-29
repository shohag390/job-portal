import React from 'react';
import banner1 from '../../assets/images/about1.jpg';
import banner2 from '../../assets/images/about2.jpg';
import { SiTicktick } from 'react-icons/si';

const About = () => {
    return (
        <div className='flex items-center justify-between container mx-auto lg:px-[90px] md:px-[50px] px-[20px] lg:py-[80px] md:py-[50px] py-[30px]'>
            <div className='lg:w-1/2 h-full w-full flex items-center justify-center'>
                <div className='relative h-[550px] flex items-center justify-center w-full'>
                    <img className='absolute rounded-md left-0 top-0 h-[450px]' src={banner1} alt="" />
                    <img className='absolute bottom-0 btn h-[280px] right-[80px] rounded-md border-[8px] border-[#fff]' src={banner2} alt="" />
                </div>
            </div>
            <div className='w-1/2'>
                <h4 className='font-bold text-[30px] pb-[15px] leading-[42px] text-[#404040]'>
                    Millions of jobs. <br />Find the one that's right for your.
                </h4>
                <p className='text-justify text-[#5c626b] pb-[15px]'>
                    Search all the open positions on the web.Get your own personalized salary estimate, Read reviews on over 30000+ companies worldwide.
                </p>
                <div className='flex flex-col gap-[10px] pb-[35px]'>
                    <div className='flex items-center gap-[10px]'>
                        <SiTicktick className='text-[#3b82f6]' />
                        <span className='text-[#5c626b]'>Digital Marketing Solutions for Tommorrow</span>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <SiTicktick className='text-[#3b82f6]' />
                        <span className='text-[#5c626b]'>Our Talented & Experienced Markting Agency</span>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <SiTicktick className='text-[#3b82f6]' />
                        <span className='text-[#5c626b]'>Create your own skin to match your brand</span>
                    </div>
                </div>
                <button class="relative px-[40px] py-[10px] text-white bg-[#3b82f6] overflow-hidden group rounded-full border-[1px] border-[#ffffffa0] btn">
                    <span class="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-white opacity-10 rotate-45 group-hover:translate-x-full transition-transform duration-500 ease-out"></span>
                    <span class="relative z-10">
                        ABOUT US
                    </span>
                </button>
            </div>
        </div>
    );
};

export default About;