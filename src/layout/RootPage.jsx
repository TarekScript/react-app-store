import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/NavBar';

const RootPage = () => {
    return (
        <div className='bg-gray-300 min-h-screen flex flex-col'>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootPage;