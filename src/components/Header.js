import React from "react";
import "./Header.css" 

function Header(){
    return(
        <div className="header"> 
            <div className="header__container"> 
                <span className="material-symbols-outlined">
                    menu
                </span>
                <h3> Phantom.app</h3>
            </div>
        </div>
    )
}
export default Header; 