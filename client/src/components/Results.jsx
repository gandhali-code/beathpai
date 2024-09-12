import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '/logos.png'
import './Results.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function Results() {
  const location = useLocation();
  const { answers, questions } = location.state || {};

  // Predefined principles
  const principles = [
    "Responsibility",
    "Training",
    "Line of Separation",
    "Perimeter Buffer Area (PBA)",
    "Personnel",
    "Wild Birds, Rodents and Insects",
    "Equipment and Vehicles",
    "Mortality Disposal",
    "Manure and Litter Management",
    "Replacement Poultry",
    "Water Supplies",
    "Feed and Replacement Litter",
    "Reporting of Elevated Morbidity and Mortality",
    "Auditing"
  ];

  // Function to calculate the score
  const calculateScore = () => {
    return answers.filter((answer) => answer === "Yes").length;
  };

  // Function to determine compliance level
  const getComplianceLevel = (score) => {
    if (score >= 40) {
      return { text: "Excellent Compliance", color: "green" };
    } else if (score >= 28) {
      return { text: "Moderate Compliance", color: "yellow" };
    } else {
      return { text: "Poor Compliance", color: "red" };
    }
  };

  //Generate pdf----------------------------------------------------------------------
  const generateResults = () => {
    const score = calculateScore();
    const compliance = getComplianceLevel(score);
  
    // Create a new jsPDF document
    const doc = new jsPDF();
  
    // Add title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(142, 28, 37);
    doc.text('Biosecurity Compliance Report', 60, 10);
  
    // Add compliance summary text
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `Based on your response to the questions of the survey, it is determined there is ${compliance.text} with the NPIP Biosecurity principles at your poultry premises. Please find detailed report below.`,
      10,
      20,
      { maxWidth: 180 }
    );
  

  
    // Load the appropriate traffic light image based on compliance
    let imgData;
    if (compliance.text ===  "Poor Compliance") {
      imgData = './red.jpg';
    } else if (compliance.text === "Moderate Compliance") {
      imgData = './yellow.jpg';
    } else if (compliance.text === "Excellent Compliance") {
      imgData = './green.jpg';
    }
   
    // Set the size and position of the image
const imgWidth = 17;  // Set the width of the image
const imgHeight = 50; // Set the height of the image
const imgX = 90;     // Set the x-coordinate position
const imgY = 30;      // Set the y-coordinate position

doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
doc.text(`Risk Class: ${compliance.text}`, 70, 85);

    // Add overall compliance score and traffic light result
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`Overall Score: ${score} out of 42`, 70, 95);
    

// Add the image to the PDF
doc.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);
  
    // Prepare data for the NPIP Principles table
    const tableData = questions.map((question, index) => {
      const response = answers[index];
      const correctiveMeasure = response === "No" ? question.CorrectiveMeasure : "Meets the minimum biosecurity standard and no immediate action required.";
      const principle = index % 3 === 0 ? principles[Math.floor(index / 3)] : ""; // Add the principle name for every 1st, 4th, 7th question, etc.
  
      return [
        principle, // Principle
        question.Questions, // Question
        response, // Response
        correctiveMeasure // Corrective Measure
      ];
    });
  
    // Group data in sets of 3 and add dividers
    const groupedData = [];
    for (let i = 0; i < tableData.length; i += 3) {
      groupedData.push(...tableData.slice(i, i + 3), ["", "", "", ""]); // Add an empty row for the divider
    }
  
    // Add NPIP Principles table to the PDF
    doc.autoTable({
      head: [["Principle", "Question", "Response", "Corrective Measure"]],
      body: groupedData,
      startY: 110, // Adjust the start position to account for the image
      styles: {
        cellPadding: 2,  // Reduce padding to fit content
        fontSize: 10,
        halign: 'left',
        valign: 'middle',
        textColor: [0, 0, 0], // Text color (black)
        fillColor: [240, 240, 240] // Background color for all rows (light gray)
      },
      columnStyles: {
        0: { cellWidth: 30 },  // Principle column
        1: { cellWidth: 70 },  // Question column
        2: { cellWidth: 30 },  // Response column
        3: { cellWidth: 60 }   // Corrective Measure column
      },
      headStyles: {
        fillColor: [142, 28, 37], // Header background color (dark red)
        textColor: [255, 255, 255] // Header text color (white)
      },
      theme: 'plain', // This can be omitted if you prefer custom styles only
      didDrawCell: (data) => {
        // Add a line divider after every 3 rows
        if (data.row.index % 4 === 3) { // Adjust the index to account for added empty rows
          doc.setDrawColor(0, 0, 0); // Light gray color for the horizontal line
          doc.setLineWidth(0.5);
          doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height);
        }
  
        // Draw vertical lines between columns
        if (data.column.index < 3) { // Do not draw line after the last column
          doc.setDrawColor(200, 200, 200); // Light gray color for vertical lines
          doc.setLineWidth(0.5);
          doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height);
        }
      },
      didDrawPage: (data) => {
        // Check if table is too close to the bottom of the page and add a page break if needed
        const pageHeight = doc.internal.pageSize.height;
        const pageBottom = data.cursor.y + doc.autoTable.previous.finalY;
        if (pageHeight - pageBottom < 30) { // Adjust this value to ensure the table fits
          doc.addPage();
        }
      

      // Add footer text
      const footerText = "© BEAT-HPAI University of Maryland 2024. All rights reserved";
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      const pageWidth = doc.internal.pageSize.width;
      const textWidth = doc.getTextWidth(footerText);
      doc.text(footerText, 10, pageHeight - 5); // Left aligned

      const logoWidth = 90;  // Adjust logo width
        const logoHeight = 10; // Adjust logo height
        const logoX = pageWidth - logoWidth - 10; // Positioned on the right
        const logoY = pageHeight - logoHeight - 5; // Positioned at the bottom
        doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);
    }
  });

  
    // Save the PDF
    doc.save("biosecurity_compliance_report.pdf");
  };
  //----------------------------------------------------------------------------------------------
  
  
  const score = calculateScore();
  const complianceLevel = getComplianceLevel(score);

  const filteredQuestions = questions.map((question, index) => ({
    ...question,
    response: answers[index],
  }));

  // Group questions in sets of 3
  const groupedQuestions = filteredQuestions.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="results">
      <h2>BIOSECURITY COMPLIANCE REPORT</h2>
      <h3>Score: {score} out of 42</h3>
      <p>
  Compliance Level :  &nbsp;
  <span style={{ backgroundColor: complianceLevel.color }}>
     { complianceLevel.text}
  </span>
</p>

<div className='withbutton'>
      <div className="risk-levels">
        <div className={`risk-level green ${complianceLevel.color === 'green' ? 'current-level' : ''}`}>
          Excellent Compliance (95% and above)
        </div>
        <div className={`risk-level yellow ${complianceLevel.color === 'yellow' ? 'current-level' : ''}`}>
          Moderate Compliance (66% - 95%)
        </div>
        <div className={`risk-level red ${complianceLevel.color === 'red' ? 'current-level' : ''}`}>
          Poor Compliance (Below 66%)
        </div>
      </div>
      <button className="generate-pdf-button" onClick={generateResults}>
        Generate PDF
      </button>
      </div>
      


{/* New Table Section */}
{/* New Table Section */}
<div className="results-table">
  <h4>Risk Analysis</h4>
  <table>
    <thead>
      <tr>
        <th>Question</th>
        <th>Response</th>
        <th>Corrective Measure</th>
      </tr>
    </thead>
    <tbody>
      {groupedQuestions.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {group.map((question, indexInGroup) => {
            // Find the index of the current question in the original questions array
            const questionIndex = questions.findIndex(q => q.Questions === question.Questions);
            const answer = answers[questionIndex]; // Get the answer using the found index

            // Determine if we need to display a principle name
            const showPrincipleName = (indexInGroup % 3 === 0) || (indexInGroup === 0);

            // Determine the corrective measure or standard message based on the answer
            const correctiveMeasure = answer === "No" 
              ? question.CorrectiveMeasure 
              : "Meets the minimum biosecurity standard and no immediate action required.";

            return (
              <React.Fragment key={indexInGroup}>
                {showPrincipleName && (
                  <tr className="principle-row">
                    <td colSpan="3" className="principle-name">
                      {principles[groupIndex]} {/* Use the appropriate principle name here */}
                    </td>
                  </tr>
                )}
                <tr>
                  <td>{question.Questions}</td>
                  <td>{answer}</td>
                  <td>{correctiveMeasure}</td>
                </tr>
                {(indexInGroup % 3 === 2) && groupIndex < groupedQuestions.length - 1 && (
                  <tr className="divider">
                    <td colSpan="3"></td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ))}
    </tbody>
  </table>
</div>






    </div>
  );
}

export default Results;


