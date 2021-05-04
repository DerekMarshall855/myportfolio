import React from 'react';

type imageProps = {
    header?: string,  // Optional header
    image_link: string,
    web_link: string,
    desc?: string
}

export const imageLink = ({header, image_link, web_link, desc}: imageProps) => <div>
    <h3>{header}</h3>
    <a href={web_link}>
        <img src={image_link} alt="Failed to load" width="40%" height="10%"/>
    </a>
    <p>{desc}</p>

</div>

export default imageLink;