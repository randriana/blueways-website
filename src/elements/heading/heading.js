import React from 'react';
import './heading.scss';

class Heading extends React.Component {
    level() {
        if(this.props.level) {
            return this.props.level;
        } else {
            return 1;
        }
    }

    render() {
        const GetHeading = `h${this.level()}`;
        return (
            <div className="heading">
                <GetHeading className="heading__text">{this.props.children}</GetHeading>
            </div>
        )
    }
}

export default Heading;
