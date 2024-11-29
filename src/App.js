import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"; // No need to import Router here
import CSVToJsonApp from "./components/CSVToJsonApp";
import BarGraph from "./components/chart"; // Updated import
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation
  const handleNavigateToChart = () => {
    navigate("/chart"); // Navigate to the /chart route
  };
  
  const handleNavigateToXlsToJson = () => {
    navigate("/xlstojson"); // Navigate to the /xlstojson route
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Expense Visualizer</h1>
      
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          {/* Instructions for using the app */}
          <div className="bg-light p-4 rounded shadow-sm mb-4">
            <h3>How to Use the App:</h3>
            <ol>
              <li>
                <strong>Step 1:</strong> Download the PDF bank statement of Yes Bank. From yes bank app or website (they will mail it to you) <br />
                <em>Note: This app works only for Yes Bank statements.</em>
              </li>
              <li>
                <strong>Step 2:</strong> Use the site{" "}
                <a href="https://www.ilovepdf.com/pdf_to_excel" target="_blank" rel="noopener noreferrer">
                  iLovePDF PDF to Excel converter
                </a>{" "}
                to convert the bank statement to an XLS file.
              </li>
              <li>
                <strong>Step 3:</strong> Use the XLS to JSON converter to convert the XLS data to a JSON file and download it.
                <br />
                <button 
                  onClick={handleNavigateToXlsToJson} 
                  className="btn btn-primary mt-3 w-100"
                >
                  Go to XLS to JSON Converter
                </button>
              </li>
              <li>
                <strong>Step 4:</strong> Now go to the{" "}
                <button 
                  onClick={handleNavigateToChart} 
                  className="btn btn-success mt-3 w-100"
                >
                  Chart Creator
                </button>{" "}
                page and upload the JSON data to download the visual chart.
              </li>
            </ol>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-center mb-4">
            <button onClick={handleNavigateToXlsToJson} className="btn btn-primary mx-2">
              Go to XLS to JSON Converter
            </button>
            <button onClick={handleNavigateToChart} className="btn btn-success mx-2">
              Go to Chart Creator
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/xlstojson" element={<CSVToJsonApp setJsonData={setJsonData} />} />
        <Route path="/chart" element={<BarGraph />} />
      </Routes>
    </div>
  );
};

export default App;
