import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Home from '../Pages/home';
import AboutMe from '../Pages/about_me';
import AboutSite from '../Pages/about_website';
import NotFoundPage from '../Pages/not_found';

// Components
import Header from './header';
import NavBar from './navBar';
import Footer from './footer';

const Main = () => {
    return (
        <Router>
            <Header />
            <NavBar />
            <hr/>
                <div className="page">
                    <Switch>
                        <Route exact path="/myportfolio" component={Home} />
                        <Route exact path="/myportfolio/about_me" component={AboutMe} />
                        <Route exact path="/myportfolio/about_site" component={AboutSite} />
                        <Route path="/404" component={NotFoundPage} />
                        <Redirect to="/404" />
                    </Switch>
                </div>
            <hr/>
            <Footer />
        </Router>
    )
}

export default Main;