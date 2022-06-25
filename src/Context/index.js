import React, { createContext } from "react";
import jsonData from "../json/facebook-clone.json"
export const UserContext = createContext()
const UserProvider = UserContext.Provider

const AppProvider = ({ children }) => {
    const [user, setUser] = React.useState({})
    const data = {
        user,
        setUser,
    }

    React.useEffect(() => {
        setUser(jsonData.user)
    }, [])

    return (
        <UserProvider value={data}>{children}</UserProvider>
    )
}

export default AppProvider