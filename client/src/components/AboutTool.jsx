import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './AboutTool.css';

function Abouttool() {
    return (
        <div className="about-tool-container">
    {/* Column 1 */}
    <div>
        <h1 className="about-tool-title">Welcome to the BEAT-HPAI Tool</h1>
        <p className="about-tool-description" >
        The <strong>BEAT-HPAI</strong> web tool, developed by Ghanem Lab, University of Maryland, College Park, is your go-to resource for strengthening your farm's defenses against Highly Pathogenic Avian Influenza (HPAI). Designed specifically for poultry growers, this easy-to-use tool allows you to self-assess the biosecurity measures you have in place on your farm.
The BEAT-HPAI tool is based on the 14 biosecurity principles recommended by the National Poultry Improvement Plan (NPIP). By simply answering a short survey, you can receive a clear score of your compliance with these principles. More importantly, the tool will provide you with detailed corrective actions tailored to address any gaps in your current biosecurity plan.

        </p>
        <p className="about-tool-description">
        <h1 className="about-tool-title">How to use the tool</h1>
        <strong>Access the Survey</strong>: Start by accessing the BEAT-HPAI survey on our website. The survey consists of biosecurity-related questions covering all aspects of your farm operations. 
        <br></br>

<strong>Answer the Questions</strong>: Choose the suitable answer to each question based on your current biosecurity practices. The questions are simple and designed for quick completion.
<br></br>
<strong>Receive Your Score</strong>: Once you have completed the survey, the tool will generate a score that reflects your farm’s compliance with NPIP biosecurity principles.
<br></br>
<strong>Review Corrective Actions</strong>: Along with your score, you’ll receive a detailed list of corrective measures that you can implement to strengthen your biosecurity plan. These recommendations are customized based on your responses to ensure they are relevant and actionable. 
<br></br>
        </p>
    </div>

    {/* Column 2 */}
    <div>
        <h1 className="about-tool-title">Why Use the BEAT-HPAI Tool?</h1>
        <p className="about-tool-description">
        <strong> Assess Your Biosecurity: </strong>This tool is designed to help you identify strengths and areas for improvement in your biosecurity plan, helping you to stay ahead of potential threats. 
        <br></br>
<strong> Readiness for HPAI Outbreak: </strong>The tool equips the growers with the necessary biosecurity measures to effectively prepare for potential HPAI outbreaks, safeguarding their operations and ensuring compliance for indemnity claims in case of an outbreak. 
<br></br>
<strong>Expert Guidance: </strong>Developed by leading experts in poultry health and biosecurity, the BEAT-HPAI is a reliable and practical resource for enhancing your farm’s biosecurity measures.
<br></br>
<strong>Privacy Protection: </strong>We respect your privacy. The BEAT-HPAI tool does not collect or store any of your answers, scores, or farm identification information. 
<br></br>
       </p>

       <h1 className="about-tool-title">Get Started Today!</h1>
       <p className="about-tool-description">
       We encourage all poultry growers to take advantage of this valuable tool. Assess your current biosecurity plan, make the necessary improvements, and protect your farm from the devastating impacts of HPAI. Your commitment to biosecurity is not just about compliance; it's about safeguarding your livelihood and the broader poultry industry.</p>
       <h1 className="about-tool-title">Meet the Team behind BEAT-HPAI</h1>
       <p className="about-tool-description">
       <strong>BEAT-HPAI </strong>was developed by Dr. Mostafa Ghanem in collaboration with graduate student Madhusudan Timilsina, with web support from Gandhali Kokate and inputs from Dr. Nathaniel Tablante. This project was funded by a USDA-NIFA Smith-Lever Special Needs grant, supporting the University of Maryland Poultry Extension Team, which includes Dr. Ghanem, Dr. Tablante, Dr. Jon Moyle, Jenny Rhodes, and Maegan Perdue.
       </p>
      
    </div>

    {/* Button spanning both columns */}
    <div className="button-container">
        <Link to="/questions">
            <button className="start-assessment-btn">Start Assessment</button>
        </Link>
    </div>
</div>

    );
}

export default Abouttool;
