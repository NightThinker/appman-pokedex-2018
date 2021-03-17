import React from 'react'

import Text from '../../components/Text/Text'

const Footer = ({ onClickBtn }) => {
  return (
    <div className='flex bg-fire h-16 relative'>
      <div className='h-32 w-32 rounded-full bg-fire absolute bottom-0 left-45 flex justify-center items-center cursor-pointer' onClick={onClickBtn}>
        <Text font='Atma' size='text-9xl' className='text-color-btnBar'>+</Text>
      </div>
    </div>
  )
}

export default Footer