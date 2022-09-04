import { createContext, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState({})

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext