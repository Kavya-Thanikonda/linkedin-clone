import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

import { auth } from './firebase';

import './Login.css';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')

    // Dispatch the action into the store
    const dispatch = useDispatch();

    const signIn = (e) => {
        // Prevent refresh when the function is called
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilePic: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error)); // Handle the error when there's "then"
    };
 
    const register = () => {
        // If not name, send an alert
        if (!name) {
            return alert('Please enter a full name')
        }

        // Create a user with email and password in Firebase backend
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            // If successful, update the user's profile
            // Go inside user Auth and update the user profile
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                // After that, dispact the Login action, push the user into REDUX store
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid, // Retrieved from Firebase
                    displayName: name,
                    photoURL: profilePic
                }));
            });
        }).catch(error => alert(error.message)); // Handle the error when there's "then"
    };
 
  return (
    <div className='login'>
        <img src='' alt='LinkedIn'/>

        <form>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Full name (required if registering)' 
                type='text'
            />

            <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder='Profile pic URL (optional)' 
                type='text'
            />

            <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email' 
                type='text'
            />

            <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password'
                type='password'
            />

            <button type='submit' onClick={signIn}>Sign In</button>
        </form>

        <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>

    </div>
  )
}

export default Login
