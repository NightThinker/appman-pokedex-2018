import React from 'react'

import search from '../../../search.png'

const Input = ({ inputRef, onChange }) => {
  return (
    <div className='flex h-12 border border-border-search w-full'>
      <input className='w-full h-full focus:outline-none Gaegu text-3xl pl-3' ref={inputRef} onChange={onChange} placeholder='Find Pokemon' />
      <img src={search} />
    </div>
  )
}

export default React.memo(Input)