import React from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/buy">Achat</Link>
        </li>
        <li>
          <Link to="/vente">Vente</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
