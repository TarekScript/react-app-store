import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext()
const ContextProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // register user 
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // console.log(user);
    // login user 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user 
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    // update profile 
    const updateUserProfile = (userUpdatedData) => {
        return updateProfile(auth.currentUser, userUpdatedData)
    }
    // update user state 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // context dataa 
    const userInfo = {
        registerUser,
        loginUser,
        user,
        logoutUser,
        loading,
        loginWithGoogle,
        updateUserProfile
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default ContextProvider;