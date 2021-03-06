import React from 'react';
import {  Route, Switch} from "react-router-dom";
import { ThemeContext } from "Utils/theme-context.js";
import Navbar from "Components/Navbar.js";
import Home from "Views/Home.js";
import Project from "Views/Project.js";
import NotFound from "Views/NotFound.js";

class AppRoot extends React.Component {
    render() {
        const themeClasses = this.context.theme.heroClass + " hero is-fullheight";
        return (
            <div className={themeClasses}>
                <div className="hero-head">
                    <Navbar/>
                    <div className="section">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Home}
                            />
                            <Route
                                path="/projects/:id"
                                component={Project}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

AppRoot.contextType = ThemeContext;

export default AppRoot;

