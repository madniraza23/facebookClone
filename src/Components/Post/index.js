import React, { useContext } from "react"
import jsonData from "../../json/facebook-clone.json"
import PostsList from "./Views/PostsLists"
import "./PostContainer.css"
import { secsToDateTime } from "../../Helpers/Helpers"
import { UserContext } from "../../Context"

export default function Post(){
    const [postContent, setPostContent] = React.useState([{}])
    const { user } = useContext(UserContext)

    React.useEffect(()=>{
        let tempPostsContent = []
        jsonData.posts.map(async (post)=>{
            let tempPost = {...post}
            tempPost.posted_on = secsToDateTime(post?.posted_on) 
            tempPostsContent.push(tempPost)
        })
        setPostContent(tempPostsContent)
    },[])
    return (
            <PostsList
                postContent={postContent}
                user={user}
            />
    )
}