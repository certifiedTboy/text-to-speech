import React, { Fragment } from "react";
import Intro from "../components/Home/Intro";
import Converter from "../components/Home/Converter";

const HomePage = () => {
  return (
    <Fragment>
      <Intro />
      <Converter />
    </Fragment>
  );
};

export default HomePage;
