import React from 'react'

import { Avatar } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

import './Post.css'

import InputOption from './InputOption'

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
        {/* Post Header */}
        <div className='post__header'>
            <Avatar/>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        {/* Post Body */}
        <div className='post__body'>
            {message}
        </div>

        {/* Post buttons */}
        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatIcon} title='Comment' color='gray'/>
            <InputOption Icon={ShareIcon} title='Share' color='gray'/>
            <InputOption Icon={SendIcon} title='Send' color='gray'/>
        </div>
      
    </div>
  )
}

export default Post
