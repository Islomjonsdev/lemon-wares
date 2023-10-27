import React from 'react'
import "./Toggle.scss"

const Toggle = () => {
  return (
    <div className='toggle'>
        <div className='container'>
            <div className='toggle__container'>
                <p className='toggle__heading'>Monthly</p>
                <label className='switch'>
                    <input type="checkbox" />
                     <span className='slider'></span>
                </label>
                <p className='toggle__year'>Yearly</p>
                <p className='toggle__text'>20%  discount</p>
            </div>
        </div>
    </div>
  )
}

export default Toggle