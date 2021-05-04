import React, {ReactNode, ReactElement} from 'react';

//Icons
import cityimg from './footer_icons/icons8-address-48.png';
import githubimg from './footer_icons/icons8-github-60.png';
import linkedinimg from './footer_icons/icons8-linkedin-52.png';
import emailimg from './footer_icons/icons8-new-post-48.png';
import phoneimg from './footer_icons/icons8-phone-60.png';

//Change these to change default, or edit on per call basis
const defaultContainerProps = {
    heading: <strong>Personal Contact and Links</strong>,
    city: <p>Waterloo, ON, CA</p>,
    linkedin: <a href='https://www.linkedin.com/in/derekmarshall855/'>LinkedIn</a>,
    github: <a href='https://github.com/derekmarshall855'>Github</a>,
    email: <p>add before upload</p>,
    phone: <p>add before upload</p>
};

//Default Typings
type ContainerProps = { city: ReactNode, linkedin: ReactNode, github: ReactNode , email: ReactNode , phone: ReactNode} & typeof defaultContainerProps;
function Footer({ heading, city, linkedin, github, email, phone }: ContainerProps): ReactElement | null {
return (
    <div className="footer">
        <h3>{heading}</h3>
        <img src={emailimg} width="1%" height="10%" alt="email png"/>{email}
        <img src={cityimg} width="1%" height="10%" alt="city png"/>{city}
        <img src={phoneimg} width="1%" height="10%" alt="phone png"/>{phone}
        <img src={linkedinimg} width="1%" height="10%" alt="linkedin png"/>  {linkedin}<p/>
        <img src={githubimg} width="1%" height="10%" alt="github png"/>  {github}
    </div>
);
}
Footer.defaultProps = defaultContainerProps;

export default Footer;
