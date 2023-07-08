import { createContext, useState } from 'react';

const PostContext = createContext();

export function PostProvider({children}) {

  const [post, setPost] = useState({
    username: "",
    posttext: ""
  })

  const updatePost = (name, value) => {
    setPost({...post, [name]: value})
  }
  
  return(
    <PostContext.Provider value={{ post, updatePost }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContext;