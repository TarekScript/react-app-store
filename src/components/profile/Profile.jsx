import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../provider/ContextProvider';

const Profile = () => {
    const { user, updateUserProfile } = use(AuthContext);
    const navigate = useNavigate()
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const updatedData = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(updatedData)
            .then(() => {
                // Profile updated!
                navigate('/')

            }).catch((error) => {
                // An error occurred

            });
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 p-4 md:px-18 mt-4 md:mt-20'>
            <div className='p-4 border-2 border-base-100 rounded-lg shadow-sm'>
                <img className='w-64 h-64 flex mx-auto rounded-xl' src={user?.photoURL} alt="not pound" />
                <h1 className='text-2xl mt-4 text-center  font-bold'>Name: {user.displayName ? user.displayName : "Not Availavle"}</h1>
                <h1 className='text-lg mt-4 text-center break-words font-bold'>Email:  {user.email ? user.email : "Not Availavle"}</h1>
            </div>
            <div className='rounded-lg md:w-3/4  mx-auto mt-6 border-gray-200 border-2  bg-base-100 p-4'>
                <h1 className='text-xl mb-4 font-bold'>Update Profile</h1>
                <form onSubmit={handleUpdateProfile} className=''>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </g>
                        </svg>
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="Username"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minlength="3"
                            maxlength="30"
                            title="Only letters, numbers or dash"
                        />
                    </label>
                    <p className="validator-hint">
                        Must be 3 to 30 characters
                        <br />containing only letters, numbers or dash
                    </p>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </g>
                        </svg>
                        <input
                            name='photo'
                            type="text"
                            required
                            placeholder="https://"

                            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                            title="Must be valid URL"
                        />
                    </label>
                    <p className="validator-hint">Must be valid URL</p>
                    <input className='btn bg-green-500 text-white' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Profile;