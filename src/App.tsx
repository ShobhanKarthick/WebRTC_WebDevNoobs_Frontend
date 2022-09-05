import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import { UserContext } from "./shared/UserContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Meet from "./pages/Meet";

function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/createMeet" element={<Meet />} />
          <Route path="/meet/:meetID" element={<Meet />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
