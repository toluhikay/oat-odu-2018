const Header = () => {
  const logoImg =
    "https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const button = 'Contact Us'
  return (
    <div className="header">
      <header className="App-header">
        <div className="logo-hamburger">
          <div className="logo">
            <img
              style={{ height: "50px", width: "150px" }}
              src={logoImg}
              alt=""
              className="logo-img"
            />
          </div>
          <div className="hamburger">
            <div className="bar bar1"></div>
            <div className="bar bar1"></div>
            <div className="bar bar1"></div>
          </div>
        </div>
        <nav className="nav-links">
            <ul className="ul-nav-links">
                <li className="ul-list"><a href="/">Home</a></li>
                <li className="ul-list"><a href="/">About Us</a></li>
                <li className="ul-list"><a href="/">What We Do</a></li>
                <li className="ul-list"><a href="/">Projects</a></li>
                <li className="ul-list"><a href="/">Blog</a></li>
                <li className="ul-list"><a href="/">Career</a></li>
            </ul>
            <button className="contact">{ button }</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
