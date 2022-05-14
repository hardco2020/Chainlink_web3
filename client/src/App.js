import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StreamRoom from "./pages/StreamRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<StreamRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
