import LikeIcon from "../../../Assets/Images/thumb-up.png"
import { completeDate, secsToDateTime } from "../../../Helpers/Helpers";

export default function PostContainer({
    user,
    profile_image,
    posted_by,
    posted_on,
    post_content,
    post_comments,
    post_like_count,
    post_liked
}) {
    return (
        <div className="post-subcontainer">
            <div className="post-detail">
                <div className="profile-image">
                    <img src={profile_image && profile_image} alt="profile" />
                </div>
                <div className="posted-by-on">
                    <div className="posted-by">
                        {posted_by}
                    </div>
                    <div className="posted-on">
                        {posted_on}
                    </div>
                </div>
            </div>

            <div className="posted-content">
                <div className="description">
                    {post_content}
                </div>
                <div className="like-counts">
                    <div className="icon-container">
                        <img src={LikeIcon} alt="like" />
                    </div>
                    <p className="like-counting">{post_like_count}</p>
                </div>
                <div className="post-reactions">
                    <div className={post_liked && "liked_post"}>Like</div>
                    <div>Comment</div>
                    <div>Share</div>
                </div>

                <div className="post-comments">
                    <div className="add_comment">
                        <div className="comment_image">
                            <img src={user.profile_picture} alt="user_profile" />
                        </div>
                        <div className="comment_input">
                            <input
                                placeholder="Write a comment"
                            />
                        </div>
                    </div>

                    {post_comments?.map((comment_detail) => {
                        let time = secsToDateTime(comment_detail.created_at)
                        return (
                            <div className="comment_container">
                                <div className="comment_image">
                                    <img src={comment_detail.user.profile_picture} alt="user_profile" />
                                </div>
                                <div className="comment_div">
                                    <div className="user_comment_detail">
                                        <div className="user_name">{comment_detail.user.name}</div>
                                        <div className="comments_text">
                                            {comment_detail.text}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="comment_date">
                                        {completeDate(time)}
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}