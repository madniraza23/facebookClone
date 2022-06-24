import React from "react"
import jsonData from "../../json/facebook-clone.json"
import UsersList from "./Views/UsersList"
import "./SideMenu.css"

export default function SideMenu() {
    const [connectedUsers, setConnectedUsers] = React.useState([])

    React.useEffect(() => {
        setConnectedUsers(jsonData.connected_users)
    }, [])
    return (
            <UsersList
                connectedUsers={connectedUsers}
            />
    )
}