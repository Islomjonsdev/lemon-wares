import "./UpTime.scss";
import clockImg from "../../assets/images/clock.svg";
import sebImg from "../../assets/images/web.svg";
import sslImg from "../../assets/images/ssl.svg";
import img4 from "../../assets/images/24x7.svg"

const UpTime = () => {
  return (
    <div className='uptime'>
        <div className='container'>
            <div className='uptime__container'>
                <ul className='uptime__list'>
                    <li className='uptime__item'>
                        <img className="uptime__img" src={clockImg} alt="" />
                        <h3 className="uptime__heading">99.9% Uptime</h3>
                        <p className="uptime__text">We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </li>
                    <li className='uptime__item'>
                        <img className="uptime__img" src={sebImg} alt="" />
                        <h3 className="uptime__heading">Blazing Fast Web Hosting</h3>
                        <p className="uptime__text">We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </li>
                    <li className='uptime__item'>
                        <img className="uptime__img" src={sslImg} alt="" />
                        <h3 className="uptime__heading">Free SSL Certificates</h3>
                        <p className="uptime__text">We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </li>
                    <li className='uptime__item'>
                        <img className="uptime__img" src={img4} alt="" />
                        <h3 className="uptime__heading">24x7 Friendly Support</h3>
                        <p className="uptime__text">We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UpTime