import React from 'react';
import Banner from '../pages/Banner/Banner';
import About from '../pages/About/About';
import Categories from '../pages/Categories/Categories';
import Jobs from '../pages/Jobs/Jobs';

const HomeLayout = () => {
    return (
        <>
            <Banner />
            <About />
            <Categories />
            <Jobs />
        </>
    );
};

export default HomeLayout;