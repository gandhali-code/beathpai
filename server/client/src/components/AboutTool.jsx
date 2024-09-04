import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './AboutTool.css';

function Abouttool() {
    return (
        <div className="about-tool-container">
            <h1 className="about-tool-title">About the BEAT-HPAI Tool</h1>
            <p className="about-tool-description">
                The <strong>BEAT-HPAI</strong> web tool, developed by Ghanem Lab at the University of Maryland, College Park, is an interactive platform designed to help poultry growers self-assess the biosecurity plans and practices implemented on their farms to combat Highly Pathogenic Avian Influenza (HPAI). The tool evaluates these biosecurity measures against the 14 biosecurity principles recommended by the National Poultry Improvement Plan (NPIP).
            </p>
            <p className="about-tool-highlight">
                It’s important to note that the tool’s traffic light index for indication of biosecurity preparedness is based on logic from an HPAI expert panel.
            </p>
            <p className="about-tool-description">
                The tool is designed to enhance biosecurity practices on the farm and prepare comprehensive and robust biosecurity plans that can pass the biennial NPIP Biosecurity Audit. Rather than providing a quantitative measurement of biosecurity levels, the tool aims to highlight the strengths, weaknesses, and potential gaps in a farm's biosecurity practices. We expect that this tool will serve as a valuable resource for poultry growers across the state of Maryland and the United States.
            </p>
            <p className="about-tool-description">
                The tool’s development has been funded through a USDA-NIFA Smith-Lever Special Needs grant entitled "Enhancing Biosecurity Compliance Audits to Mitigate HPAI Outbreaks and Enhancing Risk-based Planning for Improved Outbreak Response". This grant supports the collaborative efforts of the University of Maryland (UMD) Poultry Extension Team, consisting of distinguished experts: Dr. Mostafa Ghanem, Dr. Nathaniel Tablante, Dr. Jon Moyle, Ms. Jenny Rhodes, Ms. Maegan Perdue, and graduate student Mr. Madhusudan Timilsina. Ms. Gandhali Kokate was involved in the design and web-implementation of the tool.
            </p>
            {/* Button to start the assessment */}
            <div className="button-container">
                <Link to="/questions">
                    <button className="start-assessment-btn">Start Assessment</button>
                </Link>
            </div>
        </div>
    );
}

export default Abouttool;
