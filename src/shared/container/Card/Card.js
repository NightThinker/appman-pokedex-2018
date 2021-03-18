import React, { useState } from 'react'

import Text from '../../components/Text/Text'
import Level from '../../components/Level/Level'
import logo from '../../../cute.png'

const Card = ({ id, name, img, hp, str, weak, damage, happiness, onAddCard, onDeleteCard }) => {
  const [hover, setHover] = useState(false);

  let rows = [];
  for (let m = 0; m < happiness; m++) {
    rows.push(m);
  }

  return (
    <div
      className='bg-background-card to-shadow-card shadow flex justify-between p-3 max-h-225 hover:to-shadow-card-hover'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className='flex gap-4 w-11/12'>
        <img src={img} className='w-36' />
        <div className=' flex flex-col w-3/4'>
          <Text size='text-4xl' className='mb-2'>{name}</Text>
          <div className='flex gap-2'>
            <Text className='w-1/4'>HP</Text>
            <Level value={hp} />
          </div>
          <div className='flex gap-2'>
            <Text className='w-1/4'>STR</Text>
            <Level value={str} />
          </div>
          <div className='flex gap-2'>
            <Text className='w-1/4'>WEAK</Text>
            <Level value={weak} />
          </div>
          <div className='flex mt-2 gap-2 overflow-hidden'>
            {rows.map(i => (
              <img src={logo} className='w-6' />
            ))}
          </div>
        </div>
      </div>
      {onAddCard && (
        <div className='w-10'>
          { hover && (
            <Text size='text-2xl' font='Atma' className='text-color-btn cursor-pointer' onClick={() => onAddCard({ id, name, img, hp, strength: str, weaknesses: weak, damage, happiness })}>Add</Text>
          )}
        </div>
      )}
      {onDeleteCard && hover && (
        <Text size='text-2xl' font='Atma' className='text-color-btn cursor-pointer' onClick={() => onDeleteCard(id)}>X</Text>
      )}
    </div>
  )
}

export default Card