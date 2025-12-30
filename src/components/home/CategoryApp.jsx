import React from 'react';
import AppCard from '../../pageses/AppCard';

const CategoryApp = ({ apps }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch'>
            {
                apps.map(app => <AppCard app={app}></AppCard>)
            }
        </div>
    );
};

export default CategoryApp;