import React from 'react';
import './CommunityCard.css'

function CommunityCard(props) {

    return (
        <>
            <div className='container-fluid'>
                <div className="card">
                    <h1>{props.user}</h1>
                    <p>{props.skills}</p>
                    <button className='btn btn-primary' type='submit'>Connect</button>
                </div>
            </div>
        </>
    );
}

export default CommunityCard;