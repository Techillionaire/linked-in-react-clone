import './header.css'
import { BsSearch } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import HeaderOption from './HeaderOption';


const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1647431412~hmac=c532138333a1045a5d1ed2c47849fe6d' alt=''/>

            <div className='header__search'>
                <i><BsSearch /></i>
                <input type='text' />
            </div>

        </div>

        <div className='header__right'>
            <HeaderOption icon={<FaHome />} title='Home'/>
        </div>
    </div>
  )
}

export default Header