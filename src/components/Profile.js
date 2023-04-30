import React from 'react';
import './Profile.css';
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import network from '../photos/network.png'
import learning from '../photos/learning.png'
import practice from '../photos/practice.png'
import blogs from '../photos/blogs.png'
import plus from '../photos/plus.png'
import LogoutButton from './LogoutBtn';

function Profile() {

    const navigate = useNavigate();

    useEffect(()=>{

        console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')) {
            navigate("/login")
        }
    },[])

    const [name, setName] = useState();
    const [skills, setSkills] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        const fetchName = async () => {
            const token = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const response = await axios.get("http://localhost:4000/api/users/me", { headers });
                setName(response.data.name);
                // setSkills(response.data.skills);
                // setCity(response.data.city);
            } catch (error) {
                console.log(error);
            }
        }
        fetchName();
    }, [])

    const token = localStorage.getItem('token');

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/api/blogs/compose", {
                title,
                content,
            },
                { headers: { Authorization: `Bearer ${token}` } });

            // Handle successful response
            console.log(response.data);
            navigate("/blogs");

        } catch (error) {
            // Handle error
            setError(error.message);
        }
    };

    return (
        <>
            <div className='container-fluid'>
                <h1>User Profile</h1>
                <div className="profile">
                    <div className="user-img">
                        <img src="https://picsum.photos/200" alt="user" style={{ borderRadius: "100%" }} />
                    </div>
                    <div className="user-info">
                        <h6>Name: {name}</h6>
                        {/* <h6>Skills: {skills}</h6> */}
                        {/* <h6>City: {city}</h6> */}
                        <div className="flex flex-col items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Title: 
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="title"
                        placeholder="title"
                        required
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className=" mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                        Content: 
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="content"
                        placeholder="content"
                        required
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        className="btn btn-primary btn-c"
                        type="submit" onClick={handleSubmit}
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
                    </div>
                </div>
                <hr />
                <table className='t'>
                    <tr>
                        <td className='ttt'><Link to="/community"><img src={network} alt="network" className="img-size t1" /></Link></td>
                        <td className='ttt'><p className='t1'>Connect and Pair up with developers around the world</p></td>
                        <td className='ttt'><Link to="/blogs"><img src={blogs} alt="blogs" className="img-size t1" /></Link></td>
                    </tr>
                </table>
                <hr />
                <table className='t'>
                    <tr>
                        <td className='ttt'><p>Start a new Project </p></td>
                        <td className='ttt'><Link to="/project"><img src={plus} alt="img2" className="img-size" /></Link></td>
                        <td className='ttt'><p>Create Impact</p></td>
                    </tr>
                </table>
                <hr />
                <table className='t'>
                    <tr>
                        <td className='ttt'><img src={learning} alt="img1" className="img-size" /></td>
                        <td className='ttt'><p>Learn and Practice to hone your skills</p></td>
                        <td className='ttt'><img src={practice} alt="img2" className="img-size" /></td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Profile;