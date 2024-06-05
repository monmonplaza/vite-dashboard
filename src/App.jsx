import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/pages/developer/post/Posts";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
