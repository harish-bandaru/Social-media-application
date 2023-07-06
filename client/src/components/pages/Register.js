import { useState } from "react";
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js"; 
const Registerform = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:'',
        password: '',
        email:''
    });
    const { username, password, email} = user;
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
      e.preventDefault();
      console.log(user)
      fetchData("/user/register", 
        {
         username,
         email,
         password
        }, 
       "POST" )
      
      .then((data) => {
        if(!data.message) {
         navigate("/profile")
        }
  })
    .catch((error) => {
      console.log(error)
    })
  
  }
  
    return(
        <div>
        <form className = "register-form" onSubmit={onSubmit}>
         <div class="Registrationform">   
            <label for="username">User Name</label><br></br>
            <input type="text" name="username" id="username" onChange={onChange} value={username} required></input>
            <br></br>
            <label for="email">Email</label><br></br>
            <input type="email" name="email" id="email" onChange={onChange} value={email} required></input>
            <br></br>
            <label for="password">Password</label><br></br>
            <input type="password" name="password" id="password" onChange={onChange} value={password}></input>
            <br></br>
            <nav>
            <p>Already user LOGIN HERE? <a href="login.js">Login</a></p>
            </nav>
         </div>
         <input type="submit" class="submit-button" value="Register"></input>
         </form>
        </div>
    );
}
export default Registerform;