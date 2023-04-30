import React from 'react';
import HomeCard from './HomeCard'
import chat from '../photos/chat.png'
import pencil from '../photos/pencil.png'
import teamwork from '../photos/teamwork.png'
import blog from '../photos/blog.png'
import idea from '../photos/idea.png'
import target from '../photos/target.png'
import chatOption from '../photos/chat-option.png'
import './Home.css'

function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="heading" >
                    <h1 className='head'>Learn, Collaborate and Improve Code!</h1>
                    <p className='head-para'>Enhance your skills. Connect with the Experts.</p>
                    <div className='head-parts head-para'>
                        <div>Web 🕸️ App 📱 Game 🎲</div>
                    </div>
                <form className="d-flex" role="search" action="/login">
                    <button className="btn btn-outline-dark btn-lg btn-login" type="submit">Login</button>
                </form>
                </div >
                <HomeCard name="Learn" img={chat} />
                <HomeCard name="Practice" img={pencil} />
                <HomeCard name="Community" img={teamwork} />
                <HomeCard name="Blogs" img={blog} />

                <div className='features'>
                    <div>
                        <h3>Features</h3>
                        <img src={idea} alt="learn" style={{ height: "200px", margin: "6%" }} />
                        <img src={target} alt="goal" style={{ height: "200px", margin: "6%" }} />
                        <img src={chatOption} alt="chat" style={{ height: "200px", margin: "6%" }} />
                        <h3>Collaborate. Innovate. Exceed.</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;