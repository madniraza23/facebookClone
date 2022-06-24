export default function UserContainer({ profile_image, user_name, online_status }) {
    return (
        <div className="user-subcontainer">
            <div className="online-user-image">
                <div className={`status-indicator ${online_status === "online" && "online-status"}`}></div>
                <img src={profile_image} alt="profile" />
            </div>
            <div className="online-user-name">
                <p>{user_name}</p>
            </div>
        </div>
    )
}