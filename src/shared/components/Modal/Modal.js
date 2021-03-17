import React from 'react'
import Input from '../Input/Input'
import Card from '../../container/Card/Card'

const Modal = ({ isOpen, item, inputRef, onChangeInput, onClose, onAddCard }) => {
  console.log('item', item)

  return isOpen ? (
    <>
      <div className='absolute top-0 left-0 h-fullscreen w-fullscreen bg-background-modalOutside z-10' onClick={onClose} />
      <div className='m-9 bg-background-modal h-640 rounded-lg p-2 overflow-scroll z-20'>
        <Input inputRef={inputRef} onChange={onChangeInput} />
        <div className='mt-2 flex flex-col gap-3'>
          {item.map(({ id, img, name, hp, attacks, weaknesses }) => (
            <Card
              key={id}
              id={id}
              img={img}
              name={name}
              hp={hp}
              str={attacks}
              weak={weaknesses}
              onAddCard={onAddCard}
            />
          ))}
        </div>
      </div>
    </>
  ) : null

}

export default Modal