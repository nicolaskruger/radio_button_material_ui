import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from "../Pages/StartPage/StartPage"
import FollowPage from "../Pages/FollowPage/FollowPage"
import ContactPage from "../Pages/Contact/Contact"
import MainPage from "../Pages/MainPage/MainPage";
import CasesGamesPage from "../Pages/CasesGamesPage/CasesGamesPage";

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route exact path="/inicio">
                <StartPage/>
            </Route>
            <Route exact path="/seguir">
                <FollowPage/>
            </Route>
            <Route exact path="/contato">
                <ContactPage/>
            </Route>
            <Route exact path="/desenvolvimento">
                <CasesGamesPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;