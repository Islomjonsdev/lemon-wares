import React from 'react'
import "./Cloud.scss"
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"
import img6 from "../../assets/images/6.png"

const Cloud = () => {
  return (
    <div className='cloud'>
        <div className='container'>
            <div className='cloud__container'>
                <div className='cloud__left__side'>
                    <h2 className='cloud__left__heading'>True Cloud Web  Hosting</h2>
                    <p className='cloud__left__text'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                </div>

                <ul className='cloud__right__side'>
                    <li className='cloud__right__item'>
                        <img className='cloud__right__img' style={{width: "140px", height: "30px"}} src={img1} alt="" />
                    </li>
                    <li className='cloud__right__item'>
                        <img className='cloud__right__img' style={{width: "125px", height: "50px"}} src={img2} alt="" />
                    </li>
                    <li className='cloud__right__item'>
                        <img className='cloud__right__img' style={{width: "125px", height: "53px"}}  src={img3} alt="" />
                    </li>
                    <li className='cloud__right__item'>
                        <img className='cloud__right__img' style={{width: "172px", height: "60px"}}  src={img4} alt="" />
                    </li>
                    <li className='cloud__right__item'>
                        <img className='cloud__right__img' style={{width: "168px", height: "56px"}}  src={img5} alt="" />
                    </li>
                    <li className='cloud__right__item'>
                        <img className='cloud__right__img' style={{width: "143px", height: "47px"}}  src={img6} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cloud