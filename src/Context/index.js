import React, { createContext } from "react";

export const UserContext = createContext()
const UserProvider = UserContext.Provider

const AppProvider = ({ children }) => {
    const [user, setUser] = React.useState({})
    const data = {
        user,
        setUser,
    }
    return (
        <UserProvider value={data}>{children}</UserProvider>
    )
}

export default AppProvider