import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              React Weather
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
