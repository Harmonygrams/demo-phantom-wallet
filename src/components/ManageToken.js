import React from "react"
import "./ManageToken.css"

function ManageTokens(){ 
    return(
        <div className="manage__tokens"> 
            <div> 
                <div className="manage__tokens__container"> 
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 4.4842V3.5158C0.508829 3.50915 0.527195 3.5 0.555556 3.5H19.4444C19.4728 3.5 19.4912 3.50915 19.5 3.5158V4.4842C19.4912 4.49085 19.4728 4.5 19.4444 4.5H0.555556C0.527196 4.5 0.508829 4.49085 0.5 4.4842Z" fill="" stroke="#777777"></path><circle cx="13" cy="4" r="3.25" fill="#222222" stroke="#777777" stroke-width="1.5"></circle><path d="M0.5 13.4842V12.5158C0.508829 12.5092 0.527195 12.5 0.555556 12.5H19.4444C19.4728 12.5 19.4912 12.5092 19.5 12.5158V13.4842C19.4912 13.4908 19.4728 13.5 19.4444 13.5H0.555556C0.527196 13.5 0.508829 13.4908 0.5 13.4842Z" fill="" stroke="#777777"></path><circle cx="7" cy="13" r="3.25" fill="#222222" stroke="#777777" stroke-width="1.5"></circle></svg>
                    <h3>Manage Tokens</h3>
                </div>
            </div>
        </div>
    )
}
export default ManageTokens;
