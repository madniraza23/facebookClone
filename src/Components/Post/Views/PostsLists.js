import { completeDate } from "../../../Helpers/Helpers";
import PostContainer from "./PostContainer";

export default function PostsList({ postContent, user }) {
    return (
        <div className="post-container">
            {postContent?.map((post, index) => {
                return (
                    <PostContainer
                        user={user}
                        key={index + post.id}
                        profile_image={post?.user?.profile_picture}
                        posted_by={post?.user?.name}
                        posted_on={completeDate(post?.posted_on)}
                        post_content={post?.post_content}
                        post_like_count={post?.likes}
                        post_comments={post?.comments?.length > 0 ? post.comments : []}
                        post_liked={post?.liked}
                    />
                )
            })}
        </div>
    )
}