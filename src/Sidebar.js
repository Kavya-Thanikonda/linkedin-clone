import React from 'react'

import { useSelector } from 'react-redux'

import { Avatar } from '@mui/material'

import './Sidebar.css'

import { selectUser } from './features/userSlice'

function Sidebar() {

    // Get the user from REDUX store
    const user = useSelector(selectUser);

    /* Create a function */
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hashtag'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
      {/* Sidebar Top */}
      <div className='sidebar__top'>
        {/* Background Image */}
        <img src='' alt=''/>

        {/* Avatar */}
        <Avatar src={user.photoURL} className='sidebar__avatar'>
            {user.email[0]}
        </Avatar> {/* Use first letter of e-mail if user does not have a profile picture */}

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      {/* Sidebar STATs */}
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,14,185</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,14,818</p>
        </div>
      </div>

      {/* Sidebar Bottom */}
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('CompetativeProgramming')}
        {recentItem('EthicalHacking')}
        {recentItem('WebDevelopment')}
        {recentItem('ArtificialIntelligence')}
        {recentItem('Robotics')}
      </div>
    </div>
  )
}

export default Sidebar
