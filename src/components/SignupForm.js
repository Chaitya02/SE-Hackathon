import axios from 'axios';
import React, { useState } from 'react';
import './LoginForm.css'
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [skills, setSkills] = useState('');
    const [city, setCity] = useState('');
    const [domain1, setDomain1] = useState('');
    const [domain2, setDomain2] = useState('');
    const [domain3, setDomain3] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSkillsChange = (event) => {
        setSkills(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleDomain1Change = (event) => {
        setDomain1(event.target.value);
    };

    const handleDomain2Change = (event) => {
        setDomain2(event.target.value);
    };

    const handleDomain3Change = (event) => {
        setDomain3(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        // Add code for login authentication here

        const signup = async (email, password) => {
            try {
                const response = await axios.post('http://localhost:4000/api/users', { name, email, password, skills, city, domain1, domain2, domain3 });
                const token = response.data.token; // assuming that the token is returned in the 'token' property of the response
                localStorage.setItem('token', token); // save the token to local storage
                // handle successful response

                console.log(token);
                navigate("/profile")
            } catch (error) {
                alert('Error')
            }
        }

        signup(name, email, password, skills, city, domain1, domain2, domain3);

    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name:
                    </label><br />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="name"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email:
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
                </div><div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
                        Skills:
                    </label><br />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="skills"
                        type="skills"
                        placeholder="Skills"
                        required
                        value={skills}
                        onChange={handleSkillsChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
                        City:
                    </label><br />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="city"
                        placeholder="City"
                        required
                        value={city}
                        onChange={handleCityChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="domain1">
                        Domain1:
                    </label><br />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="domain1"
                        type="domain1"
                        placeholder="Domain1"
                        required
                        value={domain1}
                        onChange={handleDomain1Change}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="domain2">
                        Domain2:
                    </label><br />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="domain2"
                        type="domain2"
                        placeholder="Domain2"
                        required
                        value={domain2}
                        onChange={handleDomain2Change}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="domain3">
                        Domain3:
                    </label><br />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="domain3"
                        type="domain3"
                        placeholder="Domain3"
                        required
                        value={domain3}
                        onChange={handleDomain3Change}
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        className="btn btn-outline-dark btn-login btn-loginS"
                        type="submit" onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;