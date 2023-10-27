import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import headerLogo from "../../assets/images/lemon-header-logo.svg";
import headerPhoneLogo from "../../assets/images/header-phone.svg";
import { RxHamburgerMenu } from "react-icons/rx"

const Header = ({setIsHeaderSidebarActive}) => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <div className='header__container__wrapper'>
                    <Link to="/" style={{display: "block"}}>
                        <img className='header__container__logo' src={headerLogo} alt="" />
                    </Link>
                    <Link className='header__container__link__left'>Our Services</Link>
                </div>

                <ul className='header__list'>
                    <li className='header__item'>
                        <Link className='header__item__link'>About</Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__item__link' to="/blognews">Blog&News</Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__item__link'>Contact </Link>
                    </li>
                </ul>

                <div className='header__bottom'>
                    <div className='header__bottom__wrapper'>
                        <Link className='header__bottom__account' to="/accounts">Account</Link>
                    </div>

                    <div className='header__bottom__wrapper1'>
                        <Link className='header__bottom__phone__number'>
                            <img className='header__bottom__phone__logo' src={headerPhoneLogo} alt="" />+2349067322844
                        </Link>
                    </div>

                    <div className='hamburger__btn'>
                        <button className='header__hamburger__btn' onClick={() => {setIsHeaderSidebarActive(true)}}>
                            <RxHamburgerMenu className="header__hamburger__icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header