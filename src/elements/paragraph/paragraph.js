import React from 'react';
import './paragraph.scss';

class Paragraph extends React.Component {
    render() {
        return <p className="paragraph">{this.props.children}</p>;
    }
}
export default Paragraph;
