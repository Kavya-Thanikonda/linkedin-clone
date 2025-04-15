import React from 'react'
import './HeaderOption.css'

import { Avatar } from '@mui/material'

function HeaderOption({ avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {/* Render Icon if Icon is passed */}
      {Icon && <Icon className='headerOption__icon'/>}

      {/* If passed avatar, then render Avatar */}
      {avatar && (
        <Avatar className='headerOption__icon' src={avatar}/>
      )}

      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
