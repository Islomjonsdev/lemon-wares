import React from 'react';
import "./RealStories.scss";
import cv from "../../assets/images/cv.png";
import jpn from "../../assets/images/jpn.png";
import brand from "../../assets/images/brand.png"

const RealStories = () => {
  return (
    <div className='real__store'>
        <div className='container'>
            <div className='real__store__container'>
                <div className='real__store__left'>
                    <span className='real__store__left__span'></span>
                    <h2 className='real__store__left__heading'>Real Stories from Real Customers</h2>
                    <p className='real__store__left__text'>Get inspired by these stories.</p>

                    <ul className='real__store__left__list'>
                        <li className='real__store__left__item'>
                            <img className='real__store__left__img' src={cv} alt="" />
                            <p className='real__store__left__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            <span className='real__store__left__span1'>Floyd Miles</span>
                            <p className='real__store__left__text1'>Vice President, CLI</p>
                        </li>
                    </ul>
                </div>

                <ul className='real__store__right__list'>
                    <li className='real__store__right__item'>
                        <img className='real__store__right__img' src={jpn} alt="" />
                        <p className='real__store__right__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        <span className='real__store__right__span'>Jane Cooper</span>
                        <p className='real__store__right__name'>CEO, JPNL</p>
                    </li>

                    <li className='real__store__right__item1'>
                        <img className='real__store__right__img1' src={brand} alt="" />
                        <p className='real__store__right__text1'>LemonWares saved our time in Hosting my company page.</p>
                        <span className='real__store__right__span1'>Jane Cooper</span>
                        <p className='real__store__right__name1'>Co-Founder, LeeveOn Branding</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default RealStories