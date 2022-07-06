import React from "react";
import "./Header.css" 

function Header(props){
    return(
        <div className="header"> 
            <div className="header__container"> 
                <span className="material-symbols-outlined">
                    menu
                </span>
                {!props.loginState && <h3> Phantom.app</h3>}
                {props.loginState && 
                    <h3 className="header__logged">Wallet 1 <span>9Qre...nQZz</span></h3>
                }
            </div>
        </div>
    )
}
export default Header; 