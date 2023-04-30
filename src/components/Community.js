import React, { useState, useEffect } from "react";
import CommunityCard from './CommunityCard';
import './Community.css'
import axios from "axios"
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";


function Community() {

    const navigate = useNavigate();

    useEffect(()=>{

        console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')) {
            navigate("/login")
        }
    },[])

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const userData = () => {
            setLoading(true);
            const user = [
                { user: "Rahul", skills: "Web Developer" },
                { user: "Anil", skills: "App Developer" },
                { user: "Manan", skills: "Web Developer" },
                { user: "Vikas", skills: "Game Developer" },
                { user: "Pari", skills: "Web Developer" },
                { user: "Swati", skills: "Game Developer" },
                { user: "Renuka", skills: "Web Developer" },
                { user: "Arti", skills: "App Developer" },
                { user: "Akshat", skills: "App Developer" },
                { user: "Jay", skills: "Game Developer" },
                { user: "Sohil", skills: "App Developer" },
                { user: "Salman", skills: "Web Developer" },
            ]
            setUsers(user);
            setLoading(false);
        }
        userData();
    }, []);


    return (
        <>
            <div className='container-fluid'>
                <h1>Community</h1>
                <form role="search">
                    <input
                        className="form-control search"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                    </form>
                {loading ? (<h4>Data ...</h4>) : (
                    users
                        .filter((value) => {
                            if (searchTitle.trim() === "") {
                                return true;
                            } else if (
                                value.skills.toLowerCase().includes(searchTitle.trim().toLowerCase()) || value.user.toLowerCase().includes(searchTitle.trim().toLowerCase())
                            ) {
                                return true;
                            }
                            return false;
                        })
                        .map((user, index) => {
                            return (
                                <CommunityCard key={index} user={user.user} skills={user.skills} />
                            );
                        })
                )}
            </div >

            <LogoutBtn/>
        </>
    );
}

export default Community;
