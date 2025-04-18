
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

/* Import custom modules created */
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Feed from './Feed';

/* Import REDUX user slices */
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  // Pull the user from the REDUX data store
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  // When the APP component loads, fire off this piece of code
  useEffect(() => {
    // Listener that listens to any authentication change - persistent authentication change
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is logged in
        // Dispatch them into store if logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        // User is logged out
        dispatch(logout());
      }
    }) 
  }, []);

  return (
    <div className="app">

      {/* Header */}
      <Header/>

      {/* If there's no user, render a login page, else render the rest of the APP */}
      { !user ? (
        <Login/>
      ) : (
        <div className='app__body'>
          <Sidebar/>
          <Feed/>
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
