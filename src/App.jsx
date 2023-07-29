import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LogIn from "./pages/LogIn";
import Verify from "./pages/Verify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/otp" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
