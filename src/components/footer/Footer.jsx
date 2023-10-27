import React from 'react';
import "./Footer.scss"
import { Link } from 'react-router-dom';
import footerLogo from "../../assets/images/footerLogo.svg";
import heartIcon from "../../assets/images/heart.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer__container'>
                <div className='footer__wrapper'>
                  <div className='footer__left__side'>
                      <Link className='footer__left__logo__link' to="/">
                          <img className='footer__left__logo' src={footerLogo} alt="" />
                      </Link>
                      <p className='footer__left__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                  </div>

                  <ul className='footer__right'>
                    <li className='footer__right__item'>
                        <h3 className='footer__right__heading'>Service</h3>

                        <ul className='footer__right__list'>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Domain</Link>
                            </li>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Shared Hosting</Link>
                            </li>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Cloud Hosting</Link>
                            </li>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Private Hosting</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='footer__right__item'>
                        <h3 className='footer__right__heading'>Hosting</h3>

                        <ul className='footer__right__list'>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Cheap Hosting</Link>
                            </li>
                            <li className='footer__right__item'>
                               <Link className='footer__right__link'>Hosting Wordpress</Link>
                            </li>
                            <li className='footer__right__item'>
                               <Link className='footer__right__link'>Email Hosting</Link>
                            </li>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Hosting Unlimited</Link>
                            </li>
                        </ul>
                    </li>

                    <li className='footer__right__item'>
                        <h3 className='footer__right__heading'>Company</h3>

                        <ul className='footer__right__list'>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>About</Link>
                            </li>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Career</Link>
                            </li>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Contact Us</Link>
                            </li>
                        </ul>
                    </li>

                    <li className='footer__right__item'>
                        <h3 className='footer__right__heading'>Help</h3>

                        <ul className='footer__right__list'>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>FAQ</Link>
                            </li>
                            <li className='footer__right__item'>
                                <Link className='footer__right__link'>Help support</Link>
                            </li>
                        </ul>
                    </li>
                  </ul>
                </div>
                <div className='footer__bottom'>
                    <p className='footer__bottom__text'>Built by Jeremiah with</p>
                    <img className='footer__bottom__icon' src={heartIcon} alt="" />
                    <p className='footer__bottom__text'>love in Lagos. Copyright 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer