import UserContainer from "./UserContainer";

export default function UsersList({ connectedUsers }) {
    return (
        <div className="user-container">
            {connectedUsers?.map((user) => {
                return (
                    <UserContainer
                        key={user.id}
                        profile_image={user.profile_picture}
                        user_name={user.name}
                        online_status={user.online_status}
                    />
                )
            })}
        </div>
    )
}