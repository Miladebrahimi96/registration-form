import React from 'react';
import { Routes , Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
