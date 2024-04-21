// import { createReducer } from "@reduxjs/toolkit";

// const initialState={
//     isAuthenticated:false,
// }

// export const userReducer= createReducer(initialState,{
//     LoadUserRequest:(state)=>{
//         state.loading=true;
//     },
//     LoadUserSuccess:(state,action)=>{
//         state.isAuthenticated=true;
//         state.loading=false;
//         state.user=action.payload;
//     },
//     LoadUserFail:(state,action)=>{
//        state.loading = false;
//        state.error = action.payload;
//        state.isAuthenticated=false;
//     },
//     clearErrors:(state)=>{
//         state.error=null;
//     }
// })



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user:{}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        LoadUserRequest: (state) => {
            state.loading = true;
        },
        LoadUserSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        },
        LoadUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },
        clearErrors: (state) => {
            state.error = null;
        }
    }
})

export const {LoadUserRequest,LoadUserSuccess,LoadUserFail,clearErrors}=userSlice.actions

export default userSlice.reducer