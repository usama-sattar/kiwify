import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import { Routes, Route } from "react-router-dom";
import Reset from "./pages/reset";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ResetPassword" element={<Reset />} />
    </Routes>
  );
}

export default App;
