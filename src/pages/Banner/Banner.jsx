import React from 'react';
import { FiSearch } from 'react-icons/fi';
import image from '../../assets/images/banner-right.png';

const Banner = () => {
    return (
        <div className='banner container mx-auto lg:h-[100vh] lg:px-[90px] md:px-[50px] px-[20px] flex items-center justify-between pt-[10vh]'>
            <div className='w-[50%]'>
                <h1 className='font-bold text-[38px] text-[#fff] leading-[48px] uppercase pb-[10px]'>Get Hired By the <br /> Popular Candidates.</h1>
                <p className='text-[#ffffff80] pb-[20px]'>Find Jobs,Employment & Career Opportunities. Some of the <br /> companies we've helped recruit excellent applicants over the <br /> years.</p>
                <div className='h-[50px] w-[70%] bg-[#fff] rounded-full flex items-center justify-between pl-[20px] pr-[2px] py-[2px]'>
                    <div className='flex items-center gap-[15px] w-[70%] h-full'>
                        <FiSearch className='text-[20px]' />
                        <input className='focus:outline-none w-full' type="text" placeholder='Search jobs & candidates...' />
                    </div>
                    <button class="relative w-[30%] h-full text-white bg-[#3b82f6] overflow-hidden group rounded-full border-[1px] border-[#ffffffa0]">
                        <span class="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-white opacity-10 rotate-45 group-hover:translate-x-full transition-transform duration-500 ease-out"></span>
                        <span class="relative z-10">
                            SEARCH
                        </span>
                    </button>
                </div>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                <img className='h-[80vh]' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;