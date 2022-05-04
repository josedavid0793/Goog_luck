import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConfirmAccount from "./pages/ConfirmAccount";
import ForgetPassword from "./pages/ForgetPassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="confirm/:id" element={<ConfirmAccount />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
