import React from 'react'

const Input = ({ inputRef, onChange }) => {
  return (
    <input className='h-12 border border-border-search w-full' ref={inputRef} onChange={onChange} />
  )
}

export default Input