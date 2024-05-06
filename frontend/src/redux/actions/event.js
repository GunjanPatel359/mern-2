import axios from "axios";
import { deleteeventFail, deleteeventRequest, deleteeventSuccess, getAlleventsShopFailed, getAlleventsShopRequest, getAlleventsShopSuccess, eventCreateFail, eventCreateRequest, eventCreateSuccess,getAlleventsRequest,getAlleventsFailed,getAlleventsSuccess } from "../reducers/event"
import { server } from "../../server";


//create event 
export const createevent=(newForm)=>async(dispatch)=>{
    try {
        dispatch(eventCreateRequest());
        const config={headers:{"Content-Type":"multipart/form-data"} };
        const {data}=await axios.post(`${server}/event/create-event`,newForm,config)
        dispatch(eventCreateSuccess(data.events))
    } catch (error) {
        dispatch(eventCreateFail(error.response.data.message))
    }
}

//get All events
export  const getAllEventsShop=(id)=> async(dispatch)=>{
    try{
        dispatch(getAlleventsShopRequest())
        const {data}=await axios.get(`${server}/event/get-all-events/${id}`)
        dispatch(getAlleventsShopSuccess(data.events));
    }catch(error){
        dispatch(getAlleventsShopFailed(error.response.data.message));
    }
}

// delete event of a shop
export const deleteEvent=(id)=>async(dispatch)=>{
    try {
        dispatch(deleteeventRequest())

        const {data}=await axios.delete(`${server}/event/delete-shop-event/${id}`,{
            withCredentials:true
        });

        dispatch(deleteeventSuccess(data.message))
    } catch (error) {
        dispatch(deleteeventFail(error.response.data.message))
    }
}

export const getAllEvents = () => async (dispatch) => {
    try {
      dispatch(getAlleventsRequest());
  
      const { data } = await axios.get(`${server}/event/get-all-events`);
      dispatch(getAlleventsSuccess(data.events));
    } catch (error) {
      dispatch(getAlleventsFailed(error.response.data.message));
    }
  };