import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import MainNav from "./MainNav/MainNav";
import { SEO } from "../../helpers/SEO/SEO";

const Layout = (props) => {
  const location = useLocation();
  const { pathname } = location;

  let titleData;

  if (pathname === "/") {
    titleData = {
      title: "Text2Speech - Home",
      metaDescription: "We convert your bulky text to audio files",
    };
  } else {
    titleData = {
      title: "404 Error - Page not found",
      metaDescription: "Page not found",
    };
  }

  SEO(titleData);
  return (
    <Fragment>
      <header>
        <MainNav scrollTop={props.scrollTop} />
      </header>
      <main>{props.children}</main>
      <footer>{/* <Footer /> */}</footer>
    </Fragment>
  );
};

export default Layout;
