import axios from "axios";
import absoluteURL from "next-absolute-url";
import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  CLEAR_ERROR,
} from "../constants/roomConstants"

// Get all rooms
export const getRooms = (req) => async(dispatch) => {
  try {
    const {origin} = absoluteURL(req)
    const {data} = await axios.get(`${origin}/api/rooms`)
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data

    })
  } catch (error){
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: error.response.data.message
    })
  }
}

// Get room details
export const getRoomDetails = (req, id) => async(dispatch) => {
  try {
    const {origin} = absoluteURL(req)
    const {data} = await axios.get(`${origin}/api/rooms/${id}`)
    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data.room

    })
  } catch (error){
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response.data.message
    })
  }
}

// Clear errors
export const clearErrors = () => async(dispatch) => {
  dispatch({
    type: CLEAR_ERROR
  })
}