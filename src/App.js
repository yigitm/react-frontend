import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './component/Greeting';

const App = () => (
  <Routes>
    <Route path="/greeting" element={<Greeting />} />
  </Routes>
);

export default App;
