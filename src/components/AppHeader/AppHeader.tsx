import React from "react";
import { Link } from "react-router-dom";
import TryPremium from "../TryPremium/TryPremium";

const AppHeader = () => {
  return (
    <>
      <div>AppHeader</div>
      <Link to="/listen">Listen</Link>
      <Link to="/premium">Try Premium</Link>
    </>
  );
};

export default AppHeader;
