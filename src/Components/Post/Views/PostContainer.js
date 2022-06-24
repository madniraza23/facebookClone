import LikeIcon from "../../../Assets/Images/thumb-up.png"

export default function PostContainer({
    profile_image,
    posted_by,
    posted_on,
    post_content,
    post_comments,
    post_like_count,
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
                    <div>Like</div>
                    <div>Comment</div>
                    <div>Share</div>
                </div>

                <div className="post-comments">
                    {post_comments?.map((detail, index) => {
                        return (
                            <>"Madani"</>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}