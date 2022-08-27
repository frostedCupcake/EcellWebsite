import "./App.css";
import * as React from "react";
import Homepage from "./components/Homepage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Form1 from "./components/formComponents/StartupForm";
import Form3 from "./components/formComponents/VCForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Start-up-form" element={<Form1 />} />
          <Route path="/VC-form" element={<Form3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
