import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import LoginForm from '../components/LoginForm';



const PublicRoute = () => {

  let routes;
  if(!!localStorage.getItem('token')){
    routes = null
  } else{
    routes = (
      <Routes>
        <Route path="/login" element={ <LoginForm /> } />
      </Routes>)
  }
  return (
    <>
      { routes }
    </>
  )
};

export default PublicRoute;

