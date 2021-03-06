import axios from "axios"

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERROR,
} from "../constants/userConstants"

// Register User
export const registerUser = (userData) => async (dispatch) => {
    try {

      dispatch({ type: REGISTER_USER_REQUEST})

      const config = {
        headers: {
          "Content-Type": "application/JSON"
        }
      }

      const { data } = await axios.post("/api/auth/register", userData, config)

      dispatch({
        type: REGISTER_USER_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      })
    }
  }

// Clear errors
export const clearErrors = () => async(dispatch) => {
  dispatch({
    type: CLEAR_ERROR
  })
}