import { LOGIN, LOGOUT } from '../actions/authActions';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
