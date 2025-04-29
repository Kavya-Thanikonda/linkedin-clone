import React, {useEffect, useState} from 'react'

import { useSelector } from 'react-redux';

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import './Feed.css';

import InputOption from './InputOption';
import Post from './Post';

import { selectUser } from './features/userSlice';

// New firebase imports
import firebase from 'firebase/compat/app';
import { db } from './firebase';

/*
1. Connect to Firestore DB
2. Load the posts into DB
3. Render posts from DB
*/


function Feed() {

    // STATE - React variables
    // If we have a bunch of messages in the feed, to capture that in "posts"
    // Every variable created using state should have a setter function
    // Whenever we want change post, we set post to change it
    // UseState is a react hooks */}
    // useState takes in the initial value
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    // Setup a "real time listener"
    // Hook that lets us fire a piece of code when the feed component loads
    // It also allows to fire off whenever the component re-renders if we don't pass a second argument
    // If we pass in a blank dependency "[]" as second argument, it fires of once when the Feed comp loads and never again
    useEffect(() => {
        // Connect to DB
        // Import DB from firebase, access the collections called "posts", 
        // onSnapshot gives us real time listener connection to the DB to get the snapshot of the "posts" collection
        // Everytime, the posts gets added, deleted etc., give a snapshot, 
        // update the variable "posts" in Feed everytime the posts change
        // A collection has many docs, we get the docs, map through the docs, 
        // for every single doc inside the collection, return (=>) an object that contains doc ID and doc data
        // Order by timestamp DESC gets latest posts first
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ));
    }, [])

    // Declare function that's activated when post is submitted in input field
    // Push the data into DB
    // e is event, every clickable function has an event
    const sendPost = e => {
        e.preventDefault(); // Prevents the default behaviour of refresh
        // setPosts([...posts]); {/* Keep the earlier posts */}

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input, // This input field is value of the input field form that's first set into input variable using setInput
            photoUrl: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() // Standard time amoung timezones
        });

        // Set input to empty strings once loaded into DB
        setInput('');
    };

  return (
    <div className='feed'>
        {/* Input container */}
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                {/* Form to submit the post */}
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                    {/* Everytime the input is typed in, fire off an event, set the input variable, 
                        using event.target.value */}
                    {/* Everytime there's click, call the sendPost button */}
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                {/* Input options */}
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarMonthIcon} title='Write article' color='#7FC15E'/>
            </div>
        </div>

        {/* Posts */}
        {/* Everytime I have a post, render it on the screen */}
        {/* Map the post once pushed the post into posts has been loaded, destructure the post */}
        {/* Key (unique) is important in a list, as we only want react to re-render the unique element that's added to the list */}
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
        {/* <Post name='Kavya Thanikonda' description='This is a test' 
        message="WOW, this works!!!!!!!! 
        This is a linkedIn clone built from a youtube channel 
        that's built ReactJS + Redux + Firebase."/> */}
    </div>
  )
}

export default Feed
