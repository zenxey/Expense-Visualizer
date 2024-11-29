import React, { useRef, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController 
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController 
);

const BarGraph = () => {
  const chartRef = useRef(null); // chart reference
  const [rawData, setRawData] = useState([]);
  const [error, setError] = useState(null);

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (Array.isArray(data)) {
          setRawData(data);
          setError(null);
        } else {
          setError("Invalid file format. Please upload a JSON file containing an array.");
        }
      } catch (err) {
        setError("Failed to read the file. Please ensure it is a valid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  // Filter out invalid data
  const filteredData = rawData.filter((item) => {
    const isInvalidDate = item["Transaction Date"] === "00/01/1900";
    const isNoData = item.Withdrawal === "No data" && item.Deposit === "No data";
    return !isInvalidDate && !isNoData;
  });

  // Aggregate data by month
  const monthlyData = filteredData.reduce((acc, item) => {
    const dateParts = item["Transaction Date"].split("/");
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    const date = new Date(formattedDate);

    if (isNaN(date.getTime())) {
      console.warn(`Invalid date encountered: ${item["Transaction Date"]}`);
      return acc;
    }

    const month = date.toLocaleString("default", { month: "short" });

    if (!acc[month]) {
      acc[month] = { deposit: 0, withdrawal: 0 };
    }
    acc[month].withdrawal += Number(item.Withdrawal) || 0;
    acc[month].deposit += Number(item.Deposit) || 0;

    return acc;
  }, {});

  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const orderedMonthlyData = Object.keys(monthlyData)
    .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
    .reduce((ordered, key) => {
      ordered[key] = monthlyData[key];
      return ordered;
    }, {});

  let runningBalance = 0;
  const runningBalanceData = Object.keys(orderedMonthlyData).map((month) => {
    const { deposit, withdrawal } = orderedMonthlyData[month];
    runningBalance += deposit - withdrawal;
    orderedMonthlyData[month].runningBalance = runningBalance;
    return runningBalance;
  });

  const labels = Object.keys(orderedMonthlyData);
  const deposits = labels.map((month) => orderedMonthlyData[month].deposit);
  const withdrawals = labels.map((month) => orderedMonthlyData[month].withdrawal);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Deposits",
        data: deposits,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Total Withdrawals",
        data: withdrawals,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Running Balance",
        data: runningBalanceData,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        type: "line",
        tension: 0.4,
        fill: false,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Monthly Deposits, Withdrawals, and Running Balance",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleDownloadPdf = () => {
    console.log("Download button clicked");
  
    // Access the chart directly via chartRef.current
    const chart = chartRef.current;
  
    if (chart) {
      const canvas = chart.canvas; // Get the canvas directly
      if (canvas) {
        console.log("Canvas found, proceeding with download...");
        html2canvas(canvas).then((canvas) => {
          const pdf = new jsPDF();
          pdf.addImage(canvas.toDataURL(), "PNG", 10, 10, 180, 160);
          pdf.save("monthly_graph.pdf");
        }).catch((err) => {
          console.error("Error while creating PDF: ", err);
        });
      } else {
        console.error("Canvas not found");
      }
    } else {
      console.error("Chart not found");
    }
  };
  

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      console.log("Chart instance is ready");
    }
  }, [chartRef]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Financial Data Graph</h1>
      <div className="mb-4 text-center">
        <input type="file" accept=".json" onChange={handleFileUpload} className="form-control w-50 mx-auto" />
      </div>
      {error && <p className="text-danger text-center">{error}</p>}
      {rawData.length > 0 && (
        <div>
          <p className="text-center mb-4">
            If the running balance is consistently dropping, it signals that the withdrawals are higher than deposits. This helps identify if there is a need to cut expenses, increase income, or re-evaluate financial strategies.
          </p>
          <div className="text-center mb-4">
            <button onClick={handleDownloadPdf} className="btn btn-primary">
              Download PDF
            </button>
          </div>
          <div className="chart-container">
            <Bar options={options} data={data} ref={chartRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BarGraph;
