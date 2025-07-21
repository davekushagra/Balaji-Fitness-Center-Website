import React from 'react'
import { Link} from 'react-router-dom';

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: '#343a40',
        color: '#fff',
      };
    
      const navLinkStyle = {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '10px',
      };
    
      const navBrandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      };
    
      const togglerIconStyle = {
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat',
        color: 'rgba(255, 255, 255, 0.5)',
      };    
  return (
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={navBrandStyle}>
            BALAJI FITNESS CENTRE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={togglerIconStyle}
          >
            <span className="navbar-toggler-icon" style={togglerIconStyle}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/contact" className="nav-link" style={navLinkStyle}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" style={navLinkStyle}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link" style={navLinkStyle}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/workout-diet-plans" className="nav-link" style={navLinkStyle}>
                  Workout Diet Plans
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
