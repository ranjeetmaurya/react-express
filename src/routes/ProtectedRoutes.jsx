import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import BootstrapUi from "../components/BootstrapUi";

const ProtectedRoute = () => {
  let routes;

  routes = (
    <Routes>
      <Route path="/" element={<BootstrapUi />} />
    </Routes>
  );
  return <>{routes}</>;
};

export default ProtectedRoute;
