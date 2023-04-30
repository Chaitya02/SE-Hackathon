import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './LoginForm.css';

const LoginForm = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    // Add code for login authentication here

    const login = async (email, password) => {
      try {
        const response = await axios.post('http://localhost:4000/api/users/login', { email, password });
        const token = response.data.token; // assuming that the token is returned in the 'token' property of the response
        localStorage.setItem('token', token); // save the token to local storage
        // handle successful login
        console.log(token);
        navigate("/profile")

      } catch (error) {
        // handle login error
        alert('Error')
      }
    }
    login(email, password);


  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email or Username:
          </label><br />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password:
          </label><br />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="btn btn-outline-dark btn-login btn-loginS"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
        <Link to="/signup">Need to SignUp?</Link>
    </div>
  );
};

export default LoginForm;