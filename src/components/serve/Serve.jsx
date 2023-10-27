import React from 'react';
import "./Serve.scss";
import jpnlImg from "../../assets/images/jpnl.png";
import koraneImg from "../../assets/images/korane.png";
import nadineImg from "../../assets/images/nadine.png";
import leeveOnImg from "../../assets/images/leeveOn.png";
import glassImg from "../../assets/images/glass.png";
import learnImg from "../../assets/images/learn.png"
import { Link } from 'react-router-dom';

const Serve = () => {
  return (
    <div className='serve'>
        <div className='container'>
            <div className='serve__container'>
                <div className='serve__left'>
                    <h3 className='serve__left__heading'>We serve over 100 Nigerian Websites</h3>
                    <p className='serve__left__text'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                </div>

                <ul className='serve__right'>
                    <li className='serve__right__item'>
                        <Link className='serve__right__link'>
                            <img className='serve__right__img' src={jpnlImg} alt="" />
                        </Link>
                    </li>
                    <li className='serve__right__item'>
                        <Link className='serve__right__link'>
                           <img className='serve__right__img' src={koraneImg} alt="" />
                        </Link>
                    </li>
                    <li className='serve__right__item'>
                        <Link className='serve__right__link'>
                            <img className='serve__right__img' src={nadineImg} alt="" />
                        </Link>
                    </li>
                    <li className='serve__right__item'>
                        <Link className='serve__right__link'>
                            <img className='serve__right__img' src={leeveOnImg} alt="" />
                        </Link>
                    </li>
                    <li className='serve__right__item'>
                        <Link className='serve__right__link'>
                            <img className='serve__right__img' src={glassImg} alt="" />
                        </Link>
                    </li>
                    <li className='serve__right__item'>
                        <Link className='serve__right__link'>
                            <img className='serve__right__img' src={learnImg} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Serve