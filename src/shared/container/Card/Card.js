import React from 'react'

import Text from '../../components/Text/Text'
import Level from '../../components/Level/Level'
import logo from '../../../cute.png'

const Card = ({ name, img, hp, str, weak }) => {

  return (
    <div className='bg-background-card to-shadow-card shadow flex justify-between p-3'>
      <div className='flex gap-4'>
        <img src={img} className='w-32' />
        <div className=' flex flex-col'>
          <Text size='text-4xl' className='mb-2'>{name}</Text>
          <div className='flex'>
            <Text className='w-28'>HP</Text>
            <Level value={hp} />
          </div>
          <div className='flex'>
            <Text className='w-28'>STR</Text>
            <Level value={str} />
          </div>
          <div className='flex'>
            <Text className='w-28'>WEAK</Text>
            <Level value={weak} />
          </div>
          <div className='mt-2'>

            <img src={logo} className='w-10' />
          </div>
        </div>
      </div>
      <div className='cursor-pointer'>
        <Text size='text-2xl' font='Atma'>Add</Text>
      </div>
    </div>
  )
}

export default Card