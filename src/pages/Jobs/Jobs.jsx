import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Job from './Job';

const Jobs = () => {

    const { jobs } = use(AuthContext);
    console.log(jobs);


    return (
        <div className='container mx-auto lg:px-[90px] md:px-[50px] px-[20px] lg:py-[40px] md:py-[25px] py-[15px]'>
            <div>
                <h4 className='font-bold text-[30px] pb-[15px] leading-[42px] text-[#404040]'>
                    Popular Categories
                </h4>
                <p className='text-[#5c626b] pb-[30px]'>
                    Search all the open positions on the web. Get your own personalized salary estimate. <br /> Read reviews on over 30000+ companies worldwide.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-[20px]'>
                {
                    jobs?.map((job) => <Job key={job?.id} job={job} />)
                }
            </div>
        </div >
    );
};

export default Jobs;