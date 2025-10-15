import React from 'react'

interface container{
    children: React.ReactNode
}

function Container({children}: container) {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}

export default Container