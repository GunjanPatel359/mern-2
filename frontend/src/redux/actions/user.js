import axios from "axios";
import {server} from "../../server"
import { LoadUserFail,LoadUserRequest,LoadUserSuccess,clearErrors } from "../reducers/user";

export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch(LoadUserRequest());
        const {data}=await axios.get(`${server}/user/getuser`,{
            withCredentials:true
        });
        dispatch(LoadUserSuccess(data.user));
    } catch (error) {
        dispatch(LoadUserFail())
    }
}