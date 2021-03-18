import React from 'react'

const Text = ({ children, size, font, className, onClick }) => {
  return (
    <span className={`flex ${size || 'text-xl'} ${font === 'Atma' ? 'Atma' : 'Gaegu'} text-black ${className}`} onClick={onClick}>{children}</span>
  )
}

export default React.memo(Text)