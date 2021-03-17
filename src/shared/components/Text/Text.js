import React from 'react'

const Text = ({ children, size, font, className }) => {
  return (
    <span className={`flex ${size || 'text-xl'} ${font === 'Atma' ? 'Atma' : 'Gaegu'} text-black ${className}`}>{children}</span>
  )
}

export default Text