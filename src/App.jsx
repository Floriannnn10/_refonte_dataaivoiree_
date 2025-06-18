import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Data from './pages/Data';
import DataDetails from './pages/DataDetails';
import Visualization from './pages/Visualization';
import Reuse from './pages/Reuse';
import Maps from './pages/Maps';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import About from './pages/About';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AuthLayout from './components/AuthLayout';

// Configuration des futures features de React Router v7
const router = { 
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <Router {...router}> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/data/:id" element={<DataDetails />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/reuse" element={<Reuse />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
