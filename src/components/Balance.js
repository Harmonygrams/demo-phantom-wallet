import React from "react" 
import "./Balance.css" 

function Balance (){ 
    return(
        <div className="balance"> 
            <div className="balance__container">
                <h1 className="account__balance"> $145043.43</h1>
                <div className="profit__loss">
                    <h4 className="loss__profit__dollar">+$43.07</h4>
                    <h4 className="loss__profit__percent">+44.56%</h4>
                </div>
                <div className="deposit__send__buttons">
                    <button className="receive__button">Deposit</button>
                    <button className="send__button">Send</button>
                </div> 
            </div>
        </div>
    )
}
export default Balance; 