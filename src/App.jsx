import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home'
import Login from "./pages/login"
import ForgotPassword from "./pages/forgot-password"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}
