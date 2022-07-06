import React from "react" 
import "./Token.css"

function Token({tokenImage,tokenName, tokenSymbol,tokenBalance, dollarProfit, percentProfit}){
    const imagePath =  require(`../assets/${tokenImage}`)
    return(
        <div className="token"> 
            <div className="token__container"> 
                <div className="token__image__container"> 
                    <img 
                        src= {imagePath}
                    />
                </div>
                <div className="token__name__container"> 
                    <h3 className="token__name">{tokenName}</h3>
                    <p className="token__size"> {tokenBalance} {tokenSymbol}</p>
                </div>  
                <div className="token__amount__container">
                    <p className="token__profit-dollar">${dollarProfit}</p>
                    <p className="token__profit-percent">+${percentProfit}</p>
                </div>
            </div>
        </div>
    );
};
export default Token; 