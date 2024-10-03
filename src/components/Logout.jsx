import React from "react";
import { useNavigate } from "react-router-dom";
function LogOut() {
  const navigate = useNavigate();
  function triggerLogOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <button
        onClick={triggerLogOut}
        className="text-gray-600 hover:text-gray-900"
      >
        Logout
      </button>
    </>
  );
}
export default LogOut;
