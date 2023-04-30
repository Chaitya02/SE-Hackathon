import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Network() {

    const navigate = useNavigate();

    useEffect(()=>{

        console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')) {
            navigate("/login")
        }
    },[])
    return (
        <>
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <h1>Domains</h1>
            </div>
        </>
    );
}

export default Network;