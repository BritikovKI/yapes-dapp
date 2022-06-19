import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Faq from "./components/routes/Faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}

export default App;
