import { FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";
import { socialLinks } from "../data";

const icons = {
  FaFacebook,
  FaTwitter,
  FaSquarespace,
};

const SocialLinks = () => {
  return (
    <ul className="nav-links">
      {" "}
      {/* Add a class for styling */}
      {socialLinks.map((link) => {
        const Icon = icons[link.icon];
        return (
          <li key={link.id}>
            <a href={link.href} className="nav-icon">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;

/* old version below
/* import { FaFacebook, FaTwitter, FaSquarespace } from 'react-icons/fa';
import { socialLinks } from '../data';

const icons = {
  FaFacebook,
  FaTwitter,
  FaSquarespace,
};

const SocialLinks = () => {
  return (
    <ul>
      {socialLinks.map((link) => {
        const Icon = icons[link.icon];
        return (
          <li key={link.id}>
            <a href={link.href} className="nav-icon">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks; */
