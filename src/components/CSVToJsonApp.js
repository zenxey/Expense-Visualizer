import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for routing

const CSVToJsonApp = ({ setJsonData }) => {
  const [jsonData, setLocalJsonData] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file

    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase(); // Get the file extension to check if it's an Excel file
      const reader = new FileReader(); // Create a FileReader instance to read the file

      if (fileExtension === "xlsx") { // Check if the file is an XLSX file
        reader.onload = (e) => {
          const binaryData = e.target.result; // Get the binary data from the file
          const workbook = XLSX.read(binaryData, { type: "binary" }); // Parse the Excel binary data using XLSX library

          let allData = []; // Array to collect data from all sheets
          let headers = []; // Store headers from the first table
          let isHeaderExtracted = false; // Flag to ensure headers are extracted only once

          workbook.SheetNames.forEach((sheetName, sheetIndex) => { // Loop through all sheet names in the workbook
            const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
              header: 1, // Read rows as arrays, instead of an object
            });

            // Handle headers and start row index for different tables
            if (!isHeaderExtracted) {
              const headersRowIndex = 6; // Adjust this index to the correct row for Table 1 headers
              headers = sheetData[headersRowIndex] || []; // Extract headers from the defined row index
              isHeaderExtracted = true; // Ensure headers are extracted only once

              // Validate headers to ensure required columns exist
              const requiredHeaders = ["Transaction Date", "Withdrawals", "Deposits", "Running Balance"];
              const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header)); // Check for missing headers
              if (missingHeaders.length > 0) { // If required headers are missing
                console.error(`Missing headers in ${sheetName}:`, missingHeaders); // Log the missing headers
                return; // Stop further processing of this sheet
              }
            }

            // Dynamic header indexes depending on the sheet index (handles variations in column positions)
            const transactionDateIndex = headers.indexOf("Transaction Date");
            const withdrawalsIndex = sheetIndex === 0 ? 7 : 4; // Index for 'Withdrawals' column (7 for Table 1, 4 for others)
            const depositsIndex = sheetIndex === 0 ? 8 : 5;   // Index for 'Deposits' column (8 for Table 1, 5 for others)
            const runningBalanceIndex = sheetIndex === 0 ? 9 : 6; // Index for 'Running Balance' column (9 for Table 1, 6 for others)

            // Adjust the starting row index for data extraction based on the sheet
            const dataStartIndex = sheetIndex === 0 ? 7 : 2; // Use 7 for Table 1, 2 for Table 2 and onwards

            // Extract data rows (skip empty rows or invalid data)
            const extractedData = sheetData.slice(dataStartIndex).map((row, rowIndex) => {
              if (rowIndex === 1 && !row[transactionDateIndex]) {
                // If the second row is empty, start extracting from the next row
                return null; // Skip empty rows
              }

              // Extract relevant data fields for each row
              const transactionDate = row[transactionDateIndex];
              const withdrawal = row[withdrawalsIndex];
              const deposit = row[depositsIndex];
              const runningBalance = row[runningBalanceIndex];

              // Convert transactionDate from serial format if necessary
              const formattedDate = XLSX.SSF.parse_date_code(transactionDate);

              // Handle missing or empty data, replace with "No data" where applicable
              return {
                "Transaction Date": formattedDate
                  ? `${formattedDate.d < 10 ? '0' + formattedDate.d : formattedDate.d}/${formattedDate.m < 10 ? '0' + formattedDate.m : formattedDate.m}/${formattedDate.y}` // Format the date as dd/mm/yyyy
                  : "No data", // Provide default value if date is invalid or missing
                Withdrawal: withdrawal && withdrawal !== '' ? withdrawal : "No data", // Handle missing withdrawals
                Deposit: deposit && deposit !== '' ? deposit : "No data", // Handle missing deposits
                "Running Balance": runningBalance && runningBalance !== '' ? runningBalance : "No data", // Handle missing balance
              };
            }).filter((row) => row !== null); // Remove any null rows from the final data

            // Merge the data from this sheet with the main array of all data
            allData = [...allData, ...extractedData];
          });

          setLocalJsonData(allData); // Set local state with the extracted data
          setJsonData(allData); // Update global state in App.js with the extracted data
        };

        reader.readAsBinaryString(file); // Read the uploaded file as a binary string
      } else {
        alert("Unsupported file format. Please upload an XLSX file."); // Alert user if the file format is not supported
      }
    }
  };

  // Function to download the JSON data as a file
  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" }); // Create a Blob with the JSON data
    const link = document.createElement("a"); // Create an anchor element
    link.href = URL.createObjectURL(blob); // Create a link to the Blob
    link.download = "extractedData.json"; // Set the download file name
    link.click(); // Programmatically click the link to start the download
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CSV/Excel to JSON Converter</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileUpload}
            className="form-control mb-3"
          />
          <button onClick={downloadJson} className="btn btn-primary w-100 mb-3">
            Download JSON
          </button>
          {jsonData.length > 0 && (
            <div className="alert alert-info" role="alert">
              Data successfully loaded. You can now download the JSON file.
            </div>
          )}
          <pre className="bg-light p-3">{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default CSVToJsonApp;
