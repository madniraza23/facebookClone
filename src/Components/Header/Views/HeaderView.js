import React from "react";
import FacebookLogo from "../../../Assets/Images/SVG/fb-logo";
import GamingIcon from "../../../Assets/Images/SVG/gaming-icon";
import GroupIcon from "../../../Assets/Images/SVG/group-icon";
import HomeIcon from "../../../Assets/Images/SVG/home-icon";
import MarketPlace from "../../../Assets/Images/SVG/market-place";
import MenuIcon from "../../../Assets/Images/SVG/menu-icon";
import MessageIcon from "../../../Assets/Images/SVG/message-icon";
import NotificationIcon from "../../../Assets/Images/SVG/notification-icon";
import WatchIcon from "../../../Assets/Images/SVG/watch-icon";
import HeaderSearch from "./HeaderSearch";

export default function HeaderView({
    user,
    activeTab,
    setActiveTab,
}) {
    return (
        <div className="header-view">
            <div className="logo-search">
                <FacebookLogo />
                <HeaderSearch />
            </div>

            <div className="icons-container">
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

            <div className="profile-icons-container">
                <MenuIcon
                    setActiveTab={setActiveTab}
                    color={activeTab === "menu" ? "#2374e1" : "#b0b3b8"}
                />
                <MessageIcon
                    setActiveTab={setActiveTab}
                    color={activeTab === "message" ? "#2374e1" : "#b0b3b8"}
                />
                <NotificationIcon
                    setActiveTab={setActiveTab}
                    color={activeTab === "notification" ? "#2374e1" : "#b0b3b8"}
                />
                <img src={user.profile_picture} alt="profile-img"/>
            </div>
        </div>
    )
}