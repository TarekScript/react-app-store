import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { BsCloudDownload } from "react-icons/bs";
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { name, thumbnail, rating, downloads, id, description } = app;
    return (
        <Link to={`/appdetails/${id}`}>
            <div className="card bg-base-100 shadow-sm h-full ">
                <figure className="px-4 pt-4">
                    <img
                        src={thumbnail}
                        alt="img"
                        className="rounded-xl w-full h-36" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <hr className="border-t-2 border-gray-400 opacity-50" />
                    <p className='font-semibold px-2'><span className='text-lg font-semibold mr-2 underline text-gray-600'>About app:</span> {description}</p>
                    <hr className="border-t-2 border-gray-400 opacity-50" />
                    <div className="card-actions flex justify-between">
                        <h3 className='text-lg font-semibold flex items-center gap-2'><FaRegStar /> {rating}</h3>
                        <h3 className='text-lg font-semibold flex items-center gap-2'><BsCloudDownload /> {downloads}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;