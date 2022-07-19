import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/movies">Movies</NavLink>
        <NavLink exact to="/directors">Directors</NavLink>
        <NavBar exact to="/actors">Actors</NavBar>
    </nav>
  )
}

export default NavBar;
