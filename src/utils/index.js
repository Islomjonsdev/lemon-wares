import React from 'react'
import "./index.scss"

const Overlay = ({callback}) => {
  return (
    <div className='overlay' onClick={() => {callback(false)}}>Overlay</div>
  )
}

export { Overlay }