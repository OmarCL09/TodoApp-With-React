import Headercss from './Header.css';
import logoImage from '../../assets/logo192.png';

const Header = () => {
    return (
        <header className='header-container'>
            <img src={ logoImage } className='header-container-image'/>
            <h1 className='header-container-title'>To-do app</h1>
        </header>
    );
}

export default Header;