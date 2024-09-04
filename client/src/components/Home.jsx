import React from 'react';
//import StickyHeader from './StickyHeader'; // Ensure the path is correct
import './Home.css';
import image1 from '/collage.png'; 
import headImage from '/head.png'; // Import the new image
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="text-content">
                    {/* Replace the text with the image */}
                    <img src={headImage} alt="Biosecurity Logo" className="title-image" />
                    <p>
                        <span className="first-letter">B</span>iosecurity 
                        <span className="first-letter"> E</span>nhancement and 
                        <span className="first-letter"> A</span>ssessment 
                        <span className="first-letter"> T</span>ool to combat 
                        <span className="first-letter"> H</span>ighly 
                        <span className="first-letter"> P</span>athogenic 
                        <span className="first-letter"> A</span>vian 
                        <span className="first-letter"> I</span>nfluenza
                    </p>
                    <Link to="/abouttool">
                        <button className="create-schedule-btn">Get Started</button>
                    </Link>
                </div>
                <div className="image-content">
                    <img src={image1} alt="Biosecurity Image" />
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    
                   
                    <p className="footer-left"> © BEAT-HPAI University of Maryland 2024. All rights reserved. </p>
                    <p className="footer-right">Developed by 
                    <Link to ="/developer">
                    <span className='name'> Gandhali Kokate</span>
                    </Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
