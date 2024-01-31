import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks';
import { FaFacebook, FaTwitter, FaSquarespace } from 'react-icons/fa'

const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
        <img src={logo} className='nav-logo' alt='backroads' />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass='nav-links' itemClass='nav-link' />
        <SocialLinks parentClass='nav-links' itemClass='nav-link' />
      </div>
    </nav>
  );
};

export default Navbar;
