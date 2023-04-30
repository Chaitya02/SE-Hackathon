import React, { useState, useEffect } from "react";
import HackathonCard from './HackathonCard';
import './Community.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Hackathon() {

    const navigate = useNavigate();

    useEffect(() => {

        console.log(localStorage.getItem('token'));
        if (!localStorage.getItem('token')) {
            navigate("/login")
        }
    }, [])

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/hackathons')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log(data);


    const [loading, setLoading] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const userData = () => {
            setLoading(true);
            const data = []
            // setUsers(data);
            setData(data);
            setLoading(false);
        }
        userData();
    }, []);


    return (
        <>
            <div className='container-fluid'>
                <h1>Hackathon</h1>
                <form role="search">
                    <input
                        className="form-control search"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </form>
                {loading ? (<h4>Loading...</h4>) : (
                    data
                        .filter((value) => {
                            if (searchTitle.trim() === "") {
                                return true;
                            } else if (
                                value.name.toLowerCase().includes(searchTitle.trim().toLowerCase()) || value.domain.toLowerCase().includes(searchTitle.trim().toLowerCase())
                                || value.organiser.toLowerCase().includes(searchTitle.trim().toLowerCase())) {
                                return true;
                            }
                            return false;
                        })
                        .map((hackathon) => (
                            <HackathonCard
                                key={hackathon._id}
                                name={hackathon.name}
                                date={hackathon.date}
                                about={hackathon.about}
                                organiser={hackathon.organiser}
                                domain={hackathon.domain}
                            />
                        ))
                )}
            </div >
        </>
    );
}

export default Hackathon;
