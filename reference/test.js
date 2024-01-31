import './app.css'; // Assuming your CSS file is named styles.css and is in the same directory

const SocialLinks = () => {
  const links = [
    {
      href: 'https://www.facebook.com',
      icon: 'fab fa-facebook',
    },
    {
      href: 'https://www.twitter.com',
      icon: 'fab fa-twitter',
    },
    {
      href: 'https://www.squarespace.com',
      icon: 'fab fa-squarespace',
    },
  ];

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
          >
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;