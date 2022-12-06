import React from "react";
import Logo from "../Images/location.svg";

export default function Nav(){
    return(
        <nav>
            <img src={Logo} alt="logo" />
            <h2>my travel journal.</h2>
        </nav>
    )
}