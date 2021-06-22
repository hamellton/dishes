import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setModalActive, skip, setSkip }) => {
  return (
    <nav className="row">
      <div className="nav-wrapper red lighten-1">
        <div className="row">
          <div className="col s12 m4 l5"></div>
          <div className="col s12 m4 l5">
            <ul id="nav-mobile" className=" hide-on-med-and-down">
              <li>
                <Link onClick={() => setSkip(!skip)} to="/">
                  Random dish
                </Link>
              </li>
              <li>
                <Link to="/favorit-dishes">Favourites</Link>
              </li>
            </ul>
          </div>
          <div className="col s12 m4 l2">
            <button
              onClick={() => setModalActive(true)}
              className="waves-effect waves-light btn"
            >
              Add custom dish
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
