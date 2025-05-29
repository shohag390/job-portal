import React from 'react';
import Categori from './Categori';
import { GrCloudSoftware } from 'react-icons/gr';
import { IoUmbrellaOutline } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';
import { BsMotherboard } from 'react-icons/bs';
import { TbHomeCheck } from 'react-icons/tb';
import { FaRegClone } from 'react-icons/fa';

const categories = [
    {
        id: 1,
        heading: "Human Resource HR",
        total: "74 Jobs",
        icone: <FaRegClone />
    },
    {
        id: 2,
        heading: "It & Networking",
        total: "20 Jobs",
        icone: <BsMotherboard />
    },
    {
        id: 3,
        heading: "Sales & Networking",
        total: "35 Jobs",
        icone: <TbHomeCheck />
    },
    {
        id: 4,
        heading: "Project Manager",
        total: "46 Jobs",
        icone: <AiOutlineLike />
    },
    {
        id: 5,
        heading: "Data Science",
        total: "60 Jobs",
        icone: <IoUmbrellaOutline />
    },
]


const Categories = () => {
    return (
        <div className='container mx-auto lg:px-[90px] md:px-[50px] px-[20px] lg:py-[80px] md:py-[50px] py-[30px]'>
            <div>
                <h4 className='font-bold text-[30px] pb-[15px] leading-[42px] text-[#404040] text-center'>
                    Popular Categories
                </h4>
                <p className='text-[#5c626b] text-center pb-[30px]'>
                    Search all the open positions on the web. Get your own personalized salary estimate. <br /> Read reviews on over 30000+ companies worldwide.
                </p>
            </div>
            <div className='grid grid-cols-5 gap-[20px]'>
                {
                    categories.map((categorie) => <Categori key={categorie?.id} categorie={categorie} />)
                }
            </div>
        </div >
    );
};

export default Categories;