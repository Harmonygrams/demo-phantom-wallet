import React from "react" 
import Header from "./components/Header"
import Balance from "./components/Balance"
import Token from "./components/Token"
import "./App.css" 
import Data from "./Data"
import Navbar from "./components/Navbar"
import ManageTokens from "./components/ManageToken"
import PhantomLogo from "./assets/phantom-logo.svg";
import "./components/Login.css" 


function App(){ 
    const formElement = document.querySelector("#root") 
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [userPassword, setUserpassword] = React.useState('') 
    const [border, setBorder] = React.useState('none')
    const [forgotPassword, setForgotPassword] = React.useState(false)
    function updateUserPassword(event){ 
        setUserpassword(prevPassword => event.target.value)
    }
    const tokenData = Data.map(element => {
        console.log(element.tokenImage)
        return(<Token 
            {...element}
        /> )
    })
    //Form Validation 
    formElement.addEventListener('submit', (event)=>{ 
        event.preventDefault()
        if(userPassword === 'view'){
            setIsLoggedIn(true)
        }else{
            setBorder("1px solid red")
            setForgotPassword(true)
        }
    })
    return(
        <div> 
            <p className="login__details"> Password: <span className="password">view</span></p>
            <div className="app"> 
                <Header />
                {!isLoggedIn && 
                <div className="login"> 
                    <div className="logo__container">
                        <img 
                            src={PhantomLogo}
                        />
                    </div>
                    <h2> Enter your password </h2>
                    <div> 
                        <form className="login__form" id="loginForm"> 
                            <input
                                placeholder="Password"
                                type = "password"
                                name = "password"
                                value = {userPassword}
                                onChange= {updateUserPassword}
                                style = {{border:border}}
                            />
                            {forgotPassword && <h3 className="forgot__password"> Forgot Password? </h3>}
                            <button type="submit" className="login__button"> Unlock </button>
                        </form>
                    </div>
                </div>
                }
                {isLoggedIn && 
                <div> 
                    <Balance />
                    {tokenData}
                    <ManageTokens />
                    <Navbar />
                </div>
                }
            </div>
        </div>
    )
}
export default App; 