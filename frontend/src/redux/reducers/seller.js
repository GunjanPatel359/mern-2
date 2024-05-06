import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:true,
    seller:{},
}

export const sellerSlice = createSlice({
    name: "seller",
    initialState,
    reducers: {
        LoadSellerRequest: (state) => {
            state.isLoading = true;
        },
        LoadSellerSuccess: (state, action) => {
            state.isSeller = true;
            state.isLoading = false;
            state.seller = action.payload;
        },
        LoadSellerFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isSeller = false;
        },
        clearErrors: (state) => {
            state.error = null;
        }
    }
})

export const {LoadSellerRequest,LoadSellerSuccess,LoadSellerFail,clearErrors}=sellerSlice.actions

export default sellerSlice.reducer