import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Favorites from "../favorites/favorites";
import SignIn from "../SignIn/signin";
import Property from "../Property/property";

import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {
  const {placeNumber} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            placeNumber = {placeNumber}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/property">
          <Property />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeNumber: PropTypes.number.isRequired,
};

export default App;
