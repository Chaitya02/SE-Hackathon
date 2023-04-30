import React from 'react';
import './HomeCard.css'

function HomeCard(props) {
    return (
        <>
            <div className='home-card'>
                <div className="card" style={{ width: "15rem" }}>
                    <img src={props.img} className="card-img-top" alt="Learn-img"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCard;