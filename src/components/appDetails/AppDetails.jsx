import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';
import { IoIosStar } from "react-icons/io";


const AppDetails = () => {
    const [install, setInstall] = useState(false)
    const { id } = useParams();
    const data = useLoaderData();
    const selectedApp = data.find(app => app.id == id);
    const { thumbnail, name, downloads, rating, category, description, features, developer, reviews, banner } = selectedApp;
    return (
        <div>
            <img className='h-72 md:h-96 w-full' src={thumbnail} alt="" />
            <div className='flex'>
                <div>
                    <img className='w-16 md:w-28 h-20 md:h-28 relative left-10 -top-10 bg-gray-500 p-1 rounded-lg' src={banner} alt="" />
                </div>
                <div className='ml-12'>
                    <h1 className='text-lg md:text-3xl font-semibold'>{name}</h1>
                    <h3 className='md:text-xl'>By <span className='font-semibold'>{developer}</span></h3>
                </div>
            </div>
            <div className='ml-2 md:ml-12'>
                <h2 className='font-semibold md:text-xl '>{category} | {downloads}+ Downloads | {rating} Rating</h2>

                {
                    install ? <button onClick={() => setInstall(!install)} className='btn mt-4 bg-red-700 px-16 text-white'>Uninstall</button> : <button onClick={() => setInstall(!install)} className='btn mt-4 bg-green-700 px-16 text-white'>Install</button>
                }

                <hr className="border-t-2 my-4 border-gray-400 opacity-50" />
                <h1 className='text-2xl font-bold'>Description</h1>
                <hr className="border-t-2 my-4 border-gray-400 opacity-50" />
                <p className='my-4'>{description}</p>
                <hr className="border-t-2 border-gray-400 opacity-50" />
                <h1 className='text-2xl font-bold my-2'>Key Features</h1>
                <div className='flex gap-4 flex-wrap'>
                    {features.map(feature => <h1 className='bg-gray-400 py-2 px-4 md:text-lg font-semibold rounded-lg '>{feature}</h1>)}
                </div>
                <hr className="border-t-2 my-4 border-gray-400 opacity-50" />
                <h3 className='text-xl font-bold flex items-center gap-2'>App Reviews   <IoIosStar className='text-yellow-600' />   {rating}({downloads}) </h3>
                <div className='flex mt-4'>
                    {reviews.map(review => <div className='bg-gray-400 rounded-lg p-6'>

                        <h3 className='text-lg font-semibold flex items-center '>Top Review    (<IoIosStar className='text-yellow-600' />   {review.rating})</h3>
                        <p className='my-2'>{review.comment}</p>
                        <h3 className='text-end tex-bold'>- {review.user}</h3>
                    </div>)}
                </div>
            </div>

        </div>
    );
};

export default AppDetails;