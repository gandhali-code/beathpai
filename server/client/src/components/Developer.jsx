import React from 'react';
import './Developer.css';

function Developer() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="profile-picture">
                    <img src="./mypic2.jpg" alt="Gandhali Kokate" />
                </div>
                <div className="about-info">
                    <h1>About The Developer</h1>
                    <p>
                    Hi, I'm Gandhali Kokate, and I hold a Master's degree in Business Analytics from the University of Maryland and a Bachelor's degree in Computer Engineering from Pune University. My educational background has equipped me with a unique blend of technical and analytical skills, allowing me to excel in data-driven projects and web development.
                    </p>
                    <p>
                    I’ve combined my expertise in business analytics and computer engineering to bring this tool to life. It reflects my commitment to solving complex problems and my drive to innovate, seamlessly integrating technology with business strategy to create meaningful solutions.
                    </p>
                    
                    <h2>Contact Details</h2>
                    <ul>
                        <li>Email: gandhalikokate24@gmail.com</li>
                        <li>Phone: +1 (240) 714-8816</li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/gandhalikokate/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gandhalikokate</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Developer;
