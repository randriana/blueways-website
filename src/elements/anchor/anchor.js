import React from 'react';
import './anchor.scss';

class Anchor extends React.Component {
    render() {
        return <a href="#">{this.props.children}</a>;
    }
}

export default Anchor;
