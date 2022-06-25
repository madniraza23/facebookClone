import React, { useContext } from "react";
import HeaderView from "./Views/HeaderView";
import "./Header.css"
import { UserContext } from "../../Context";

export default function Header() {
    const [activeTab, setActiveTab] = React.useState("home")
    const { user } = useContext(UserContext)

    return (
        <HeaderView
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
    )
}