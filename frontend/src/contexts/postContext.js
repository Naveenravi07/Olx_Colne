import { createContext, useState } from "react";

export const postContext = createContext()

function Post({ children }) {
    let [post, setPost] = useState(null)
    return (
        <postContext.Provider value={{ post, setPost }}>
            {children}
        </postContext.Provider>
    )
}
export default Post