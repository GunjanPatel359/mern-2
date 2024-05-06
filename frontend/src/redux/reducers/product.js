import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productCreateRequest: state => {
      state.isLoading = true
    },
    productCreateSuccess: (state, action) => {
      state.isLoading = false
      state.product = action.payload
      state.success = true
    },
    productCreateFail: (state, action) => {
      state.isLoading = false
      state.error = action.payload
      state.success = false
    },
    //get all products of shop
    getAllProductsShopRequest: state => {
      state.isLoading = true
    },
    getAllProductsShopSuccess: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    getAllProductsShopFailed: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    // delete product of a shop
    deleteProductRequest: state => {
      state.isLoading = true
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false
      state.message = action.payload
    },
    deleteProductFail: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    clearErrors: state => {
      state.error = null
    },

    // get all products
    getAllProductsRequest: state => {
      state.isLoading = true
    },
    getAllProductsSuccess: (state, action) => {
      state.isLoading = false
      state.allProducts = action.payload
    },
    getAllProductsFailed: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {
  productCreateRequest,
  productCreateFail,
  productCreateSuccess,
  clearErrors,
  getAllProductsShopFailed,
  getAllProductsShopRequest,
  getAllProductsShopSuccess,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFail,
  getAllProductsRequest,
  getAllProductsSuccess,
  getAllProductsFailed
} = productSlice.actions

export default productSlice.reducer
