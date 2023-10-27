import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogNews.scss";
import blogNewsLogo from "../../assets/images/lemon-header-logo.svg";
import headerPhoneLogo from "../../assets/images/header-phone.svg";
import { RxHamburgerMenu } from "react-icons/rx"

const BlogNews = () => {
  return (
    <div className='blognews'>
        <div className='container'>
            <div className='blognews__container'>
               <div className='blognews__wrapper'>
                  <Link to="/">
                        <img className='blognews__link__logo' src={blogNewsLogo} alt="" />
                  </Link>
                  <Link className='blognews__left__link'>Our Services</Link>
               </div>

               <ul className='blognews__list'>
                  <li className='blognews__item'>
                      <Link className='blognews__link' to="/">About</Link>
                  </li>
                  <li className='blognews__item'>
                      <Link className='blognews__link'>Blog&News</Link>
                  </li>
                  <li className='blognews__item'>
                      <Link className='blognews__link'>Contact</Link>
                  </li>
               </ul>

               <div className='blognews__right'>
                    <div className='blognews__right__wrapper'>
                       <Link className='blognews__right__link' to="/accounts">Account</Link>
                    </div>

                    <div className='blognews__left__wrapper'>
                        <Link className='blognews__left__wrapper__link'>
                            <img className='blognews__left__wrapper' src={headerPhoneLogo} alt="" />
                            +2349067322844
                        </Link>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default BlogNews