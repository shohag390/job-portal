import React from 'react';
import Banner from '../pages/Banner/Banner';
import About from '../pages/About/About';
import Categories from '../pages/Categories/Categories';

const HomeLayout = () => {
    return (
        <>
            <Banner />
            <About />
            <Categories />
        </>
    );
};

export default HomeLayout;