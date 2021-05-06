import React from 'react';

import ImageLink from '../Components/image_link';
import LangaugeList from '../Components/language_list';

//images
import selfie from './images/selfie.png';
/*
    Required:
        - Image of self
        - Description
        - List of languages followed by years of experience
        - Open to work or not
        - Links to social media (Linkedin, github)
*/

class About_Me extends React.Component {
    render() {
        return (
            <div className="Me-container">
                <h3>About Me</h3>
                <ImageLink image_link={selfie} web_link='https://www.linkedin.com/in/derekmarshall855/'/>
                <div className="floated">
                    <p> I am a detail-oriented and self-motivated Computer
                        Science and Psychology graduate with some experience in
                        software development, data analysis and problem
                        solving. I'm passionate about computer science and
                        eager to expand knowledge in web development. Mostly I interested in
                        backend design and implementation, but enjoy full stack and front end
                        development as well.
                    </p>
                    <p>
                        I graduated from Wilfrid Laurier University, double majoring in Computer Science and Psychology.
                        My overall average was a 10/12 (A-), while my computer science average was an 11/12 (A).
                        I was able to achieve high grades due to my passion for computer programming and my
                        high work ethic.
                    </p>
                    <p>
                        Some of my personal interests include:
                            <ul>
                                <li>Programming</li>
                                <li>Reading</li>
                                <li>Puzzle Games</li>
                                <li>Watching streams</li>
                                <li>Playing games</li>
                            </ul>
                    </p>
                </div>

                <h2>Years of experience (Academic and Personal) and Level (Professional)</h2>
                <LangaugeList   languages={['Python - 3 years - Junior',
                                            'Java - 2 years - Junior',
                                            'C - 1 year - Junior',
                                            'JavaScript - 1 year - Junior',
                                            'SQL - 1 year - Junior',
                                            'WebGL - 0.5 years - Junior',
                                            'MongoDB - 0.5 years - Junior',
                                            'ExpressJS - 0.5 years - Junior',
                                            'ReactJS - 0.5 years - Junior',
                                            'NodeJS - 0.5 years - Junior',
                                            'TypeScript - 0.5 years - Junior',
                                            'R - 0.5 years - Junior']}
                                renderNames={(item: string)=><div>{item}</div>} />
            </div>
            
        );
    }
}

export default About_Me;