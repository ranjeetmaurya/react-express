import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import BootstrapUi from "../components/BootstrapUi";

const PublicRoute = () => {
  let routes;
  if (false) {
    routes = null;
  } else {
    routes = (
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    );
  }
  return <>{routes}</>;
};

export default PublicRoute;
