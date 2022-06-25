import React from "react"
import jsonData from "../../json/facebook-clone.json"
import UsersList from "./Views/UsersList"
import "./SideMenu.css"
import HomeIcon from "../../Assets/Images/SVG/home-icon"
import WatchIcon from "../../Assets/Images/SVG/watch-icon"
import MarketPlace from "../../Assets/Images/SVG/market-place"
import GroupIcon from "../../Assets/Images/SVG/group-icon"
import GamingIcon from "../../Assets/Images/SVG/gaming-icon"

export default function SideMenu() {
    const [connectedUsers, setConnectedUsers] = React.useState([])
    const [activeTab, setActiveTab] = React.useState("home")

    React.useEffect(() => {
        setConnectedUsers(jsonData.connected_users)
    }, [])
    return (
        <div className="side-menu-container">
            <UsersList
                connectedUsers={connectedUsers}
            />
            <div className="side-icons-container">
                <HomeIcon
                    setActiveTab={setActiveTab}
                    colorClass={activeTab === "home" ? "active-icon" : "icon"}
                />
                <WatchIcon
                    setActiveTab={setActiveTab}
                    colorClass={activeTab === "watch" ? "active-icon" : "icon"}
                />
                <MarketPlace
                    setActiveTab={setActiveTab}
                    colorClass={activeTab === "market" ? "active-icon" : "icon"}
                />
                <GroupIcon
                    setActiveTab={setActiveTab}
                    colorClass={activeTab === "group" ? "active-icon" : "icon"}
                />
                <GamingIcon
                    setActiveTab={setActiveTab}
                    colorClass={activeTab === "gaming" ? "active-icon" : "icon"}
                />
            </div>
        </div>
    )
}