import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar' 
import Home from './components/Home'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Alert from './components/Alert'
import Network from './components/Network'
import Project from './components/Project'
import Individual from './components/Individual'
import Team from './components/Team'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Community from './components/Community';
import GetBlogs from './components/Blogs';
import Hackathon from './components/Hackathon';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#393E46';
      document.body.style.color = '#fff';
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      showAlert("Light mode has been enabled.", "success");
    }
  }

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/project" element={<Project />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/team" element={<Team />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blogs" element={<GetBlogs />} />
        <Route path="/hackathon" element={<Hackathon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
