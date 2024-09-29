import { combineReducers } from 'redux';
import { PROJECT_STATE } from '../actions/actions';
import authReducer from './authReducer';

const initialState = { selectedProjectId: undefined, projects: [], tasks: [] };

const projectsState = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_STATE:
      return action.payload 
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  projectsState,
  authReducer
});

export default rootReducer;
