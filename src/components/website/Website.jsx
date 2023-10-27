import "./Website.scss";
import callIcon from "../../assets/images/call.svg"
import { Link } from 'react-router-dom';

const Website = () => {
  return (
    <div className='website'>
        <div className='container'>
            <div className='website__container'>
                <div className='website__heading__wrapper'>
                    <h1 className='website__heading'>We're here to make your website awesome.</h1>

                    <Link className='website__link'>
                        <img className='website__icon' src={callIcon} alt="" />
                        Get  in touch with us
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Website