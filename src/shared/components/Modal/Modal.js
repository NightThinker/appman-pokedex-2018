import React from 'react'
import Input from '../Input/Input'
import Card from '../../container/Card/Card'

const Modal = ({ isOpen, item, onClose }) => {
  console.log('item', item)

  return isOpen ? (

    <div className='absolute top-0 left-0 h-fullscreen w-fullscreen bg-background-modalOutside z-10 ' onClick={onClose}>
      <div className='m-9 bg-background-modal h-640 rounded-lg p-2 overflow-scroll'>
        <Input />
        <div className='mt-2 flex flex-col gap-3'>
          {item.map(({ imageUrl, name, hp, attacks, weaknesses }) => (
            <Card
              img={imageUrl}
              name={name}
              hp={hp >= 100 ? '100%' : `${hp}%`}
              str={attacks ? `${attacks.length * 50}%` : '0%'}
              weak={weaknesses ? `${weaknesses.length * 100}%` : '0%'} />
          ))}
        </div>
      </div>
    </div>
  ) : null

}

export default Modal