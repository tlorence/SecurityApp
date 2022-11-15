import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Navbar from './Shared/Navbar';
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
