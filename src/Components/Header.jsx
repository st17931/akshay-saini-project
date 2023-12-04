import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";


const Header = ()=>{
    
    const [loginStatus, setLoginStatus] = useState("Login...!!")
    console.log("Header is returned")

    


    // const a = 5;
    // useEffect(()=> console.log("without dependency array"));
    // useEffect(()=>{
    // console.log("with empty dependency array")},[]);
    // useEffect(()=>console.log("loginStatus as value in dependency array"),[a]);

    return(
      <div className="navBar">
        
        <img src={LOGO_URL}/>
        <div className="flex">
        <ul className="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
        </ul>
        <button className="btn"
        onClick={(e)=>{
              // if(loginStatus == "Login...!!!"){
              //   setLoginStatus("Logout...!!!")
              // }else{
              //   setLoginStatus("Login...!!!")
              // }
              loginStatus == "Login...!!" ? setLoginStatus("Logout...!!") : setLoginStatus("Login...!!");
        }}
        
        >{loginStatus}</button>
        </div>
      </div>
    )
}

export default Header;