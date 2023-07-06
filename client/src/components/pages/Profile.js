import { useState } from "react";
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";
const Profile = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
        const [post, setPost] = useState({
            username: "",
            posttext: ""
        });
        const { username, posttext} = post;
        const onChange = (e) => setPost({...post, [e.target.name]: e.target.value})
    
        const onSubmit = (e) => {
          e.preventDefault();
          let user = localStorage.getItem('user');
          console.log(user)
          console.log(post)
          //const user = "harishbandaru"
          fetchData("/post/create", 
            {
             user,
             post
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
        //<div>
            //<label for="email">UserName/E-mail</label>
            //WELCOME!!! 
          //  TO YOUR PAGE
        //</div>
        
        <div>
            
        <form className = "post-form" onSubmit={onSubmit}>
        <div class="PostForm">   
           <label for="post">Please enter your post text here</label>
           <input type="text" name="posttext" id="posttext" onChange={onChange} value={posttext} required></input>
           <br></br>
        </div>
        <input type="submit" class="submit-button" value="Post"></input>
        </form>
        </div>
    );
}
export default Profile;