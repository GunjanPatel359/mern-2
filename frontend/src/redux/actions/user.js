import axios from 'axios'
import { server } from '../../server'
import {
  LoadUserFail,
  LoadUserRequest,
  LoadUserSuccess,
//   clearErrors
} from '../reducers/user'
import {
  LoadSellerFail,
  LoadSellerRequest,
  LoadSellerSuccess
} from '../reducers/seller'

export const loadUser = () => async dispatch => {
  try {
    dispatch(LoadUserRequest())
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true
    })
    dispatch(LoadUserSuccess(data.user))
  } catch (error) {
    dispatch(LoadUserFail())
  }
}

export const loadSeller = () => async dispatch => {
  try {
    dispatch(LoadSellerRequest())
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true
    })
    dispatch(LoadSellerSuccess(data.seller))
  } catch (error) {
    dispatch(LoadSellerFail())
  }
}
