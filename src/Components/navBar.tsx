import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="topnav">
            <ul>
                <li><NavLink to="/">Home Page</NavLink></li>
                <li><NavLink to="/about_me">About Me</NavLink></li>
                <li><NavLink to="/about_site">About Website</NavLink></li>
            </ul>
       </div>
    );
}

export default NavBar;