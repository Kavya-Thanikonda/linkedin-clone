import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './Widgets.css'

function Widgets() {

    // Create news article
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>

      {newsArticle('ChatGPT is trending', 'Is AI the future?')}
    </div>
  )
}

export default Widgets
