import React from 'react';
import './header.scss';

import heroImage from './hero_image.jpg';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img className="header__image" src={heroImage} alt={"Man with fishing boat"}/>
            </div>
        );
    }
}

export default Header;
