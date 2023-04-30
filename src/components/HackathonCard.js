import React from 'react';
import './Hackathon.css'

function HackathonCard(props) {

    return (
        <>
            <div className='container-fluid'>
                <div className="card">
                    <h1>{props.name}</h1>
                    <hr style={{border: "1px solid"}}/>
                    <p>{props.date}</p>
                    <p>{props.about}</p>
                    <p>{props.organiser}</p>
                    <p>{props.domain}</p>
                    <button className='btn btn-primary' type='submit'>Participate</button>
                </div>
            </div>
        </>
    );
}

export default HackathonCard;