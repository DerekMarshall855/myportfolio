import React from 'react';

/*
    Required:
        - Description
        - Languages Used (Typescript)
        - Framework (React, possibly mongoDB + express + node if backend needed)
        - Tools Used 
        - Platform uploaded to (AWS, Google, etc.)
*/

class About_Site extends React.Component {
    render() {
        return (
            <div className="Site-container">
                <h3>About The Website</h3>
                <p>
                    This website was designed and built from scratch by me, Derek Marshall.
                    It uses TypeScript and React to create a dynamic web page. Some custom components
                    were designed in typescript, such as "ImageLink" which allowed me to quickly and easily
                    create images with imbedded links (Such as the selfie on the AboutMe Page).

                    <br/>
                    <br/>
                    The home page contains links to some of my other projects github pages, which show knowledge
                    in use of MongoDB, Express, Node, React, Python, Javascript, WebGL and more. The footer on the
                    bottom of each page contains a link to my github for a better overview of all the projects I have completed.
                </p>
            </div>
            
        );
    }
}

export default About_Site;