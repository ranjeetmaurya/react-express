// Example action type
export const INCREMENT = 'INCREMENT';
export const PROJECT_STATE = 'PROJECT_STATE';

// Example action creator
export const increment = () => ({
  type: INCREMENT
});

export const setProjectsState = (state) => ({
  type: 'PROJECT_STATE',
  payload: state,
});
