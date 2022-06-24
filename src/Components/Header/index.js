import React, { useContext } from "react";
import HeaderView from "./Views/HeaderView";
import "./Header.css"
import { UserContext } from "../../Context";
import jsonData from "../../json/facebook-clone.json"

export default function Header() {
    const [activeTab, setActiveTab] = React.useState("home")
    const {
        user,
        setUser
    } = useContext(UserContext)

    React.useEffect(() => {
        setUser(jsonData.user)
    }, [])

    return (
        <HeaderView
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
    )
}