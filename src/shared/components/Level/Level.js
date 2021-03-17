import React from 'react'

const Level = ({ value }) => {
  return (
    <div className='relative bg-background-levelTube w-80 h-6 rounded-full'>
      <div className='absolute top-0 left-0 h-full bg-background-levelTube-value  rounded-full' style={{ width: `${value || '0%'}` }} />
    </div>
  )
}

export default Level