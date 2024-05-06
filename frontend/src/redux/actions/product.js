import axios from "axios";
import { deleteProductFail, deleteProductRequest, deleteProductSuccess, getAllProductsFailed, getAllProductsRequest, getAllProductsShopFailed, getAllProductsShopRequest, getAllProductsShopSuccess, getAllProductsSuccess, productCreateFail, productCreateRequest, productCreateSuccess } from "../reducers/product"
import { server } from "../../server";


//create product 
export const createProduct=(newForm)=>async(dispatch)=>{
    try {
        dispatch(productCreateRequest());
        const config={headers:{"Content-Type":"multipart/form-data"} };
        const {data}=await axios.post(`${server}/product/create-product`,newForm,config)
        dispatch(productCreateSuccess(data.product))
    } catch (error) {
        dispatch(productCreateFail(error.response.data.message))
    }
}

//get All Products
export  const getAllProductShops=(id)=> async(dispatch)=>{
    try{
        dispatch(getAllProductsShopRequest())
        const {data}=await axios.get(`${server}/product/get-all-products-shop/${id}`)
        dispatch(getAllProductsShopSuccess(data.products));
    }catch(error){
        dispatch(getAllProductsShopFailed(error.response.data.message));
    }
}

// delete product of a shop
export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        dispatch(deleteProductRequest())

        const {data}=await axios.delete(`${server}/product/delete-product/${id}`,{
            withCredentials:true
        });

        dispatch(deleteProductSuccess(data.message))
    } catch (error) {
        dispatch(deleteProductFail(error.response.data.message))
    }
}

// get all products
export const getAllProducts = () => async (dispatch) => {
    try {
      dispatch(getAllProductsRequest());
  
      const { data } = await axios.get(`${server}/product/get-all-products`);
      dispatch(getAllProductsSuccess(data.products));
    } catch (error) {
      dispatch(getAllProductsFailed(error.response.data.message));
    }
  };