import React from 'react'

import { useSelector } from 'react-redux'

import { Avatar } from '@mui/material'

import './HeaderOption.css'

import { selectUser } from './features/userSlice'

function HeaderOption({ avatar, Icon, title, onClick}) {

    const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
      {/* Render Icon if Icon is passed */}
      {Icon && <Icon className='headerOption__icon'/>}

      {/* If passed avatar, then render Avatar */}
      {avatar && (
        <Avatar className='headerOption__icon' src={user?.photoURL}>{user?.email[0]}</Avatar>
        // user?.photoURL Optional chaining as user might not exist when logout
        // Use first letter of e-mail if user does not have a profile picture
      )}

      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
