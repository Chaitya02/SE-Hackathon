import React from 'react'
import LogoutButton from './LogoutBtn';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Project() {

    const navigate = useNavigate();

    useEffect(()=>{

        console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')) {
            navigate("/login")
        }
    },[])

    return (
        <>
            <h1>Team Options:</h1>
            <form action="/individual">

            <button className='btn btn-outline-dark btn-c'>Individual</button>
            </form>
            <form action="/team">

            <button className='btn btn-outline-dark btn-c'>Create Team</button>
            </form>
        </>
    );
}
