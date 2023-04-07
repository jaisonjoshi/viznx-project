import {
  CLEAR_ERROR,
  CLEAR_LOADING,
  REQUEST,
  SET_ERROR,
  SET_LOADING,
  USER_AUTH_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "./types";

export const contextReducer = (state, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case USER_AUTH_FAIL:
      return { ...state, loading: false, userInfo: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        userInfo: null,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
