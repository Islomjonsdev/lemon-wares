import React from 'react';
import "./ChoosePlen.scss"
import jsonLinks from "../../dummiy-data.json"
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ChoosePlen = () => {
  return (
    <div className='choose__plan'>
        <div className='container'>
            <div className='choose__plan__container'>
                <ul className='choose__plan__list'>
                    <li className='choose__plan__item'>
                        <h3 className='choose__plan__heading'>Starter</h3>
                        <p className='choose__plan__text'>with all your customers via all conversation channels in one central dashboard.</p>
                        <span className='choose__plan__price'>$2.80</span>
                        <span className='choose__plan__month'>Per month</span>
                        <button className='choose__plan__btn'>Choose this Plan</button>

                        {
                            jsonLinks.map(choosePlanLinks => 
                                <div className='choose__plan__wrapper' key={uuidv4()}>
                                    <Link className='choose__plan__link'>{choosePlanLinks.links}</Link>
                                </div>    
                            )
                        }
                    </li>
                    <li className='choose__plan__item'>
                        <h3 className='choose__plan__heading'>Standard</h3>
                        <p className='choose__plan__text'>with all your customers via all conversation channels in one central dashboard.</p>
                        <span className='choose__plan__price'>$4.20</span>
                        <span className='choose__plan__month'>Per month</span>
                        <button className='choose__plan__btn'>Choose this Plan</button>

                        {
                            jsonLinks.map(choosePlanLinks => 
                                <div className='choose__plan__wrapper' key={uuidv4()}>
                                    <Link className='choose__plan__link'>{choosePlanLinks.links}</Link>
                                </div>    
                            )
                        }
                    </li>
                    <li className='choose__plan__item'>
                        <h3 className='choose__plan__heading'>Suprem</h3>
                        <p className='choose__plan__text'>with all your customers via all conversation channels in one central dashboard.</p>
                        <span className='choose__plan__price'>$7.00</span>
                        <span className='choose__plan__month'>Per month</span>
                        <button className='choose__plan__btn'>Choose this Plan</button>

                        {
                            jsonLinks.map(choosePlanLinks => 
                                <div className='choose__plan__wrapper' key={uuidv4()}>
                                    <Link className='choose__plan__link'>{choosePlanLinks.links}</Link>
                                </div>    
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ChoosePlen