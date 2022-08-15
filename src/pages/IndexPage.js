import { Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import AuthContext from "../context/Auth/authContext";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {


    console.log(location.pathname);

    if (location.pathname === "/") {
      if (auth) {
        navigate("/chat", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    }
  }, []);

  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
