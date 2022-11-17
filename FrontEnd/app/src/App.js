import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Navbar from './Shared/Navbar';
import AdminDashboard from './Pages/AdminDashboard';
import UserAccount from './Pages/UserAccount';
import FileUpload from './Pages/FileUploadScreen';
import SendMessage from './Pages/SendMessages';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/dashboard" element={<Navbar child={<AdminDashboard/>} />} />
        <Route path="/userAccount" element={<Navbar child={<UserAccount/>} />} />
        <Route path="/fileUpload" element={<Navbar child={<FileUpload/>} />} />
        <Route path="/sendMessage" element={<Navbar child={<SendMessage/>} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
