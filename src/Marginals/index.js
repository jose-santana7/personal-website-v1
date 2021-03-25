import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../Pages/Home';
import Work from '../Pages/Work';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';

import Navbar from './Navbar';

const ReactRouterSetup = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route exact path="/work"> <Work /> </Route>
                <Route exact path="/about"> <About /> </Route>
                <Route exact path="/contact"> <Contact /> </Route>
                <Route path="*"> <Error /></Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterSetup