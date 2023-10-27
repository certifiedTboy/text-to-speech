import React from "react";
import styles from "./MainNav.module.css";
import logo from "../../../Assets/logo.png";
import { NavLink } from "react-router-dom";

const MainNav = ({ scrollTop }) => {
  return (
    <nav className={scrollTop > 0 ? `${styles.nav_sticky}` : ""}>
      {" "}
      <div className={`${styles.nav}`}>
        <div>
          <img src={logo} alt="Logo" width={"50px"} />
        </div>
        <div>
          {" "}
          <ul className={styles.navbar}>
            <li className={styles.navitems}>
              <a href=""> Products</a>
            </li>
            <li className={styles.navitems}>
              {" "}
              <a href=""> Integrations</a>
            </li>
            <li className={styles.navitems}>
              {" "}
              <a href=""> Compare</a>
            </li>
          </ul>
        </div>
        <div className={styles.auth_btn}>
          {/* <NavLink to={"/login"} className={styles.signin_btn}>
            Sign in
          </NavLink> */}

          <NavLink to={""} className={styles.signup_btn}>
            Start for Free
          </NavLink>

          <a href="" className={styles.toggle_btn}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </a>
        </div>
      </div>{" "}
    </nav>
  );
};

export default MainNav;
