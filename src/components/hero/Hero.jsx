import { Link } from 'react-router-dom'
import "./Hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='hero__container'>
                <div className='hero__left__side'>
                    <ul className='hero__left__list'>
                        <li className='hero__left__item'>
                            <Link className='hero__left__link'>Hosting</Link>
                        </li>
                        <li className='hero__left__item'>
                            <Link className='hero__left__link active__hero__left__link'>Domain</Link>
                        </li>
                        <li className='hero__left__item'>
                            <Link className='hero__left__link active__hero__left__link'>SEO</Link>
                        </li>
                        <li className='hero__left__item'>
                            <Link className='hero__left__link active__hero__left__link'>Email</Link>
                        </li>
                    </ul>

                    <div className='hero__bottom__wrapper'>
                        <h2 className='hero__bottom__heading'>Premium Web Hosting for Your Website</h2>
                        <p className='hero__bottom__text'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>

                        <div className='hero__bottom__btn__wrapper'>
                            <Link className='hero__bottom__btn1' to="/signup">Create an Account</Link>
                            <Link className='hero__bottom__btn2'>Choose your plan</Link>
                        </div>
                    </div>
                </div>

                <div className='hero__right__side'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero