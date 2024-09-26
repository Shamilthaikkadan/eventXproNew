import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Authlayout from './Layout/Auth Layout/AuthLayout';
import UserLayout from './Layout/User Layout/UserLayout';
import MainRoute from './Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
