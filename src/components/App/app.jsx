import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = (props) => {
  const placeNumber = props;
  return (
    <Main
      placeNamber = {placeNumber}
    />
  );
};

App.propTypes = {
  placeNumber: PropTypes.number.isRequired,
};

export default App;
