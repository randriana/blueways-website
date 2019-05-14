import React from 'react';
import './about.scss';
import Heading from "../../elements/heading/heading";
import Paragraph from "../../elements/paragraph/paragraph";

class About extends React.Component {
    render() {
        return(
            <section className="about">
                <Heading>Hvem er vi?</Heading>
                <div className="about__paragraph">
                    <Paragraph>Blueways vil gjennom flere prosjekter bidra til å bekjempefattigdom på Madagaskar.
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi id euismod dolor.
                    </Paragraph>
                    <Paragraph>
                        Suspendisse potenti. Vestibulum eget nibh facilisis, pretiumurna vel, imperdiet quam.
                        Etiam bibendum consecteturmagna non elementum. Aliquam eget ipsum et nibhplacerat mattis.
                    </Paragraph>
                </div>
            </section>
        );
    }
}

export default About;
