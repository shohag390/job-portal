import React from 'react';

const Categori = ({ categorie }) => {
    return (
        <div className='border-[2px] border-[#f0f0f0] flex flex-col justify-center items-center p-[30px] rounded-md'>
            <div className='h-[60px] w-[60px] rounded-md flex items-center justify-center text-[#3b82f6] text-[22px] bg-[#3b83f61c]'>
                {categorie?.icone}
            </div>
            <h4 className='text-[#404040] text-[18px] font-semibold pt-[15px] pb-[6px]'>{categorie?.heading}</h4>
            <p className='text-[#5c626b]'>{categorie?.total}</p>
        </div>
    );
};

export default Categori;