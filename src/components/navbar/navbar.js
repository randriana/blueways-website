import React from 'react';
import './navbar.scss';

import logo from './blueways_logo.svg';

class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar">
                <div className="logo">
                    <img className="logo__image" src={logo} alt="Logo of Blueways"/>
                    <span className="logo__text">BLUEWAYS</span>
                </div>
                <div className="navbar__navigation">
                    <div className="navbar__navigation__item">
                        <a href="#about">Hvem er vi?</a>
                    </div>
                    <div className="navbar__navigation__item">
                        <a href="#project">Det store prosjektet</a>
                    </div>
                    <div className="navbar__navigation__item">
                        <a href="#">Kontakt oss</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
