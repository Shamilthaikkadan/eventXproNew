import { useState } from 'react';
import './App.css';
import AuthLayout from './Layout/Auth Layout/AuthLayout';
import Login from './Pages/login/Login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LogCard from './components/Log Card/LogCard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogCard />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
