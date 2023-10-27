import React from 'react'
import "./HeaderSidebar.scss"
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi"
import headerSidebarLogo from "../../assets/images/lemon-header-logo.svg";
import headerPhoneLogo from "../../assets/images/header-phone.svg";

const HeaderSidebar = ({isHeaderSidebarActive, setIsHeaderSidebarActive}) => {
  return (
    <div className={isHeaderSidebarActive === true ? "headerSidebar headerSidebarActive" : "headerSidebar"}>
        <div className='header__sidebar__container'>
            <div className='header__sidebar__wrapper'>
                <Link to="/">
                    <img className='header__sidebar__logo' src={headerSidebarLogo} alt="" />
                </Link>
                <FiX className='header__sidebar__icon' onClick={() => {setIsHeaderSidebarActive(false)}}/>
            </div>

            <div className='header__sidebar__list__wrapper'>
                <ul className='header__sidebar__list'>
                    <li className='header__sidebar__item'>
                        <Link className='header__sidebar__link'>About</Link>
                    </li>
                    <li className='header__sidebar__item'>
                        <Link className='header__sidebar__link' to="/blognews">Blog&News</Link>
                    </li>
                    <li className='header__sidebar__item'>
                        <Link className='header__sidebar__link'>Contact</Link>
                    </li>
                </ul>

                <div className='header__sidebar__list__bottom'>
                    <div className='header__sidebar__right'>
                        <Link className='header__sidebar__right__link' to="/accounts">Account</Link>
                    </div>

                    <div className='header__sidebar__right1'>
                        <Link className='header__sidebar__right1__link'>
                            <img style={{width: "20px", height: "19px"}} src={headerPhoneLogo} alt="" srcset="" />+2349067322844
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderSidebar