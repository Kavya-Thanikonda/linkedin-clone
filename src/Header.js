import React from 'react'

import './Header.css'

/* Import Icons from material UI */
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

import HeaderOption from './HeaderOption';


/* LinkedIn Headers */


function Header() {
  return (
    <div className='header'>

      {/* Header Left */}
      <div className='header__left'>
            {/* LinkedIn ICON */}
            <LinkedInIcon className='linkedin__icon' fontSize='large'/>

        <div className='header__search'>
            {/* Search Icon */}
            <SearchRoundedIcon/>
            <input type='text' placeholder='search'/>
        </div>
      </div>

      {/* Header right */}
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={MessageIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar='' title='me'/>
      </div>
    </div>
  )
}

export default Header
