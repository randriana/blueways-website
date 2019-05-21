import React from 'react';
import './project.scss';
import image from './children.jpg';


import Heading from "../../elements/heading/heading";
import Paragraph from "../../elements/paragraph/paragraph";
import Anchor from "../../elements/anchor/anchor";

class Project extends React.Component {
    render() {
        return(
            <section id="project" className="project">
                <img src={image} alt="Children image"/>
                <div className="text-container">
                    <Heading>Det store prosjektet</Heading>
                    <div className="project__paragraph">
                        <Paragraph>Blueways vil gjennom flere prosjekter bidra til å bekjempefattigdom på Madagaskar.
                            Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi id euismod dolor.
                        </Paragraph>
                        <Anchor>Les mer</Anchor>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;
