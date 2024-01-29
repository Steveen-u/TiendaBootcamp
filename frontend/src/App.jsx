import React from 'react';
import FirstView from "./App/FirstView/FirstView.jsx";
import SecondView from "./App/info/SecondView.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstView />} />
        <Route path="info" element={<SecondView />} />
      </Routes>
    </Router>
  );
}

export default App;
