import React from "react";
import AppBody from "./components/AppBody";
import Header from "./components/Header";
import PublicRoute from "./routes/PublicRoutes";
import ProtectedRoute from "./routes/ProtectedRoutes";
import BootstrapUi from "./components/BootstrapUi";

function App() {
  return (
    <>
      <BootstrapUi />
    </>
  );
}

export default App;
