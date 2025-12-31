import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/ContextProvider';

const Register = () => {
    const { registerUser, updateUserProfile, loginWithGoogle } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const updatedData = {
            displayName: name,
            photoURL: photo
        }
        registerUser(email, password)
            .then(result => {
                updateUserProfile(updatedData)
                then(() => {
                    // Profile updated!

                }).catch((error) => {
                    // An error occurred

                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex  justify-center mt-8 p-4 '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold'>Please Register</h1>
                    <form onSubmit={handleRegister} className="fieldset">

                        {/* name /  */}
                        <label className="label">Name</label>
                        <input required name='name' type="text" className="input" placeholder="Name" />

                        {/* photo url  */}
                        <label className="label">Photo Url</label>
                        <input required name='photoUrl' type="text" className="input" placeholder="Photo Url" />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input" placeholder="Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>

                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-gray-500">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='text-center font-semibold'>Already Have An Account? <Link to='/login' className='underline text-blue-500'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;