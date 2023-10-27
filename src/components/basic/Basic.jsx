import React from 'react'
import { Link } from 'react-router-dom'
import "./Basic.scss"

const Basic = () => {
  return (
    <div className='basic'>
        <div className='container'>
            <div className='basic__container'>
                <div className='basic__wrapper'>
                    <div className='basic__heading__wrapper'>
                        <Link className='basic__heading__1'>Basic</Link>
                    </div>
                    <div className='basic__heading__wrapper1'>
                        <Link className='basic__heading__2'>Premium</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Basic