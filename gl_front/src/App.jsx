import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RoutePro from "./layout/RoutePro";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConfirmAccount from "./pages/ConfirmAccount";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";
import Home from "./pages/Home";
import Raffles from "./pages/Raffles";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  //console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
             <Route index element={<Login />} />
             <Route path="register" element={<Register />} />
             <Route path="confirm/:id" element={<ConfirmAccount />} />
             <Route path="forgetpassword" element={<ForgetPassword />} />
             <Route path="forgetpassword/:token" element={<NewPassword />} />
          </Route>
          <Route path="/home" element={<RoutePro />}>
            <Route index element={<Home />}/>
            <Route path="raffles" element={<Raffles />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
