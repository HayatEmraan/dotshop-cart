import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LogIn from "./pages/LogIn";
import Verify from "./pages/Verify";
import { Toaster } from "react-hot-toast";
import Private from "./Private/Private";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Private>
                <Cart />
              </Private>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
