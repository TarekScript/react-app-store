import React from 'react';
import AppCard from '../../pageses/AppCard';

const TreandingApp = ({ sortedApp }) => {
    const treandingApp = sortedApp.slice(0, 4);
    return (
        <div className=' py-10 '>
            <h1 className='text-2xl font-bold mb-6'>Treanding App</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  items-stretch'>
                {
                    treandingApp.map(app => <AppCard app={app}></AppCard>)
                }
            </div>
        </div>

    );
};

export default TreandingApp;