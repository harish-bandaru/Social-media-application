import { useState } from "react";
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../../context/userContext.js";

const Profile = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [post, setPost] = useState({
        username: user.username,
        posttext: ""
    });
    const [liPosts, setLiPosts] = useState([])
    const { username, posttext} = post;
    //-----------------------------------------------------
    const getAllPosts = () => {
      fetchData("/post/fetch", {username}, "POST")
      .then((data)=>{
        console.log(data)
        let listArray = Object.values(data)
        setLiPosts(listArray)
  })
  .catch((err)=>console.log(`Error! ${err}`));
    }
    useEffect(() => {
      let ignore = false;
      
      if (!ignore)  getAllPosts()
      return () => { ignore = true; }
      },[]);
    //------------------------------------------------
    const onChange = (e) => {
      setPost({...post, [e.target.name]: e.target.value})}
    const onSubmit = async(e) => {
      e.preventDefault();
      console.log(post)
      await fetchData("/post/create", 
        {
          username,
          posttext
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
        fetchData("/post/fetch", {username}, "POST")
        .then((data)=>{
          console.log(data)
          let listArray = Object.values(data)
          setLiPosts(listArray)
    })
    .catch((err)=>console.log(`Error! ${err}`));
      }

    return(
        <div>
        <h2>WELCOME {user.username}!!!</h2>
        <form className = "post-form" onSubmit={onSubmit}>
        <div className="PostForm">   
           <label htmlFor="post">Please enter your post text here</label>
           <input type="text" name="posttext" id="posttext" onChange={onChange} value={posttext} required></input>
           <br></br>
        </div>
        <input type="submit" className="submit-button" value="Post"></input>
        <br></br>
        <h2>List of your posts</h2>
        <br></br>
        {liPosts.length > 0 && (
        
        <ul>
        {liPosts.map(lipost => (
        <li key={lipost.id}>{lipost.posttext}</li>
        ))}
        </ul>
        )}
        </form>
        </div>
    );
}
export default Profile;

//<table className="table table-striped table-bordered">
//<thead>
  //  <tr>
    //    <th>liPosts</th>
    //</tr>
//</thead>
//<tbody>
  //  {liPosts && liPosts.map(lipost =>
    //    <tr key={post.id}>
      //      <td>{post.posttext}</td>
        //</tr>
    //)}
//</tbody>
//</table>


//---------------------------
//{liPosts.length > 0 && (
  //<ul>
    //{liPosts.map(lipost => (
      //<li key={lipost.id}>{lipost.posttext}</li>
    //))}
  //</ul>
//)}