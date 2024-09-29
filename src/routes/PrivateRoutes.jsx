import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  //const isAuthenticated = !!localStorage.getItem('token'); 
  const isAuthenticated = !!localStorage.getItem('token')// Example: token-based authentication

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;