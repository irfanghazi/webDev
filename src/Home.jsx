import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/logo4.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
