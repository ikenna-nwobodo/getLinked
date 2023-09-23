import "./App.css";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Register from "./components/register";
import Render from "./components/render";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route index element={<Render />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
