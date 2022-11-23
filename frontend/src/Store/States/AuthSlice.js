import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice= createSlice({
    name: "auth",

    initialState: {
        "user":null,
        "loggedin":false
    },

    reducers: {
        addUser: (state, action) => {
            state.user=action.payload.user
            state.loggedin=true
        },
        logout:(state,action)=>{
            state.user=null
            state.loggedin=false
        }
    }
})

export const {addUser,logout}=AuthSlice.actions
export default AuthSlice.reducer