import { Box } from "@mui/material";
import { useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AuthContext from "./context/Auth/authContext";
import ChatPage from "./pages/ChatPage";
import ForgotPass from "./pages/ForgotPass";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const auth = useContext(AuthContext);
  console.log(auth);

  return (
    <Box sx={{bgcolor:"#f3f3f3",minHeight:"100vh"}}>
      <Routes>
        {!auth && (
          <Route path="/" element={<IndexPage />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgot" element={<ForgotPass />} />
          </Route>
        )}

        {auth && (
          <Route path="/" element={<IndexPage />}>
            <Route path="chat" element={<ChatPage />} />
            <Route path="profile" element={<SettingsPage />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to={auth? "/chat":"/login"}/>} />
      </Routes>
    </Box>
  );
}

export default App;
