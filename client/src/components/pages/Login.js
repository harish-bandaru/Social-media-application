import { useState } from "react";
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";

const Loginform = () => {
    const navigate = useNavigate();
    const {user, updateUser} = useContext(UserContext);
    const { username, email, password} = user;
    const onChange = (e) => updateUser(e.target.name, e.target.value)

    const onSubmit = (e) => {
      e.preventDefault();
      console.log(user)
      fetchData("/user/login", 
        {
         username,
         password
        }, 
       "POST" )
      
      .then((data) => {
        if(!data.message) {
        updateUser("authenticated", true)
        navigate("/profile")
        }
  })
    .catch((error) => {
      console.log(error)
    })
  
  }
    return(
        <div>
        <form className = "login-form" onSubmit={onSubmit}>
            <label htmlFor="username">UserName/E-mail</label><br></br>
            <input type="username" placeholder="Enter user name" name="username" onChange={onChange} value={username} id="username" required></input>
            <br></br>
            <label htmlFor="Password">Password</label><br></br>
            <input type="password" placeholder="Enter password" name="password" id="password" onChange={onChange} value={password} required></input>
            <br></br>
            <a href="Register" className="newaccount">New Here!!! Create Account</a>
            <br></br>
            <input type="submit" id="btn-users" className="submit-button" value="Login"></input>
        </form>
        </div>
    );
}
export default Loginform;