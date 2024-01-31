import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="section footer">
           	<PageLinks parentClass='footer-links' itemClass='footer-link' />
            <SocialLinks parentClass='footer-links' itemClass='footer-social-link' />
            <p className="copyright">copyright © travel tours company<span id="date">2023</span>. all rights reserved</p>
        </footer>
  );
}

export default Footer;