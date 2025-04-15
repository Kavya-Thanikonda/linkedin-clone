import React from 'react'

import { Avatar } from '@mui/material'

import './Sidebar.css'


function Sidebar() {

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
        <Avatar className='sidebar__avatar'/>
        <h2>Kavya Thanikonda</h2>
        <h4>kthanikonda15@gmail.com</h4>
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
