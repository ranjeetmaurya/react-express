import React from "react";
import AppBody from "./AppBody";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoutes";
import PublicRoute from "../routes/PublicRoutes";
import ProtectedRoute from "../routes/PublicRoutes";
import store from "../store";
import { Provider } from "react-redux";
function BootstrapUi() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <PublicRoute />
          <ProtectedRoute />
          <PrivateRoute>
            <Header></Header>
            <AppBody />
          </PrivateRoute>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default BootstrapUi;
