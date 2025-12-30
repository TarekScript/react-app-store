import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CategoryApp from './CategoryApp';
import Slider from './Slider';
import TreandingApp from './TreandingApp';

const Home = () => {
    const data = useLoaderData();
    const sortedApp = [...data].sort((a, b) => b.rating - a.rating);
    const productivityAppFilter = data.filter(app => app.category == 'Productivity');
    const gamingApp = data.filter(app => app.category == 'Gaming');
    const educationApp = data.filter(app => app.category == 'Education');

    return (
        <div>
            <Slider></Slider>
            <div className='w-10/12 mx-auto'>
                <TreandingApp sortedApp={sortedApp}></TreandingApp>
                <h1 className='text-2xl font-bold mb-6'>Productivity App</h1>
                <CategoryApp apps={productivityAppFilter}></CategoryApp>
                <h1 className='text-2xl font-bold my-6'>Productivity App</h1>
                <CategoryApp apps={gamingApp}></CategoryApp>
                <h1 className='text-2xl font-bold my-6'>Education App</h1>
                <CategoryApp apps={educationApp}></CategoryApp>
            </div>
        </div>
    );
};

export default Home;