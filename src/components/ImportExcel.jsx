// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import axios from 'axios';

// const ImportExcel = () => {
//   const [excelData, setExcelData] = useState([]);

//   // Function to handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];

//     // Create a FileReader to read the Excel file
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       const data = new Uint8Array(event.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });

//       // Assuming the first sheet is the relevant one
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];

//       // Convert the sheet data to JSON
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);
//       setExcelData(jsonData); // Update state with the imported data
//     };

//     // Read the file as binary string
//     reader.readAsArrayBuffer(file);
//   };

//   // Function to save the Excel data to the server
//   const handleSaveToServer = async (data) => {
//     try {
//       const response = await axios.post('https://your-api-endpoint/products', data);
//       console.log('Data saved successfully:', response.data);
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   // Call this function to save the imported data to the server
//   const handleSaveClick = () => {
//     if (excelData.length > 0) {
//       handleSaveToServer(excelData); // Pass the JSON data to the server
//     } else {
//       alert('No data to save. Please upload an Excel file first.');
//     }
//   };

//   return (
//     <div className="text-center mt-5">
//       <input
//         type="file"
//         accept=".xlsx, .xls"
//         onChange={handleFileUpload}
//         className="mb-4"
//       />

//       {excelData.length > 0 && (
//         <div>
//           <h3 className="text-lg font-bold mb-2">Imported Data:</h3>
//           <pre className="bg-gray-100 p-3 border">{JSON.stringify(excelData, null, 2)}</pre>
//           <button
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
//             onClick={handleSaveClick}
//           >
//             Save to Server
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImportExcel;


//-----

// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ImportExcel = () => {
//     const [excelData, setExcelData] = useState([]);
//     const navigate = useNavigate()

//   // Function to handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];

//     // Create a FileReader to read the Excel file
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       const data = new Uint8Array(event.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });

//       // Assuming the first sheet is the relevant one
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];

//       // Convert the sheet data to JSON
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);
//       setExcelData(jsonData); // Update state with the imported data
//     };

//     // Read the file as binary string
//     reader.readAsArrayBuffer(file);
//   };

//   // Function to save the Excel data to the server
//   const handleSaveToServer = async (data) => {
//     try {
//       const response = await axios.post('https://react-exam-json-server.onrender.com/products', data);
//         console.log('Data saved successfully:', response.data);
        
//           // Navigate to the DisplayData component after successful save
//       navigate('/dataDisplay', { state: { importedData: excelData } });
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   // Call this function to save the imported data to the server
//   const handleSaveClick = () => {
//     if (excelData.length > 0) {
//       handleSaveToServer(excelData); // Pass the JSON data to the server
//     } else {
//       alert('No data to save. Please upload an Excel file first.');
//     }
//   };

//   return (
//     <div className="text-center mt-5">
//       <input
//         type="file"
//         accept=".xlsx, .xls"
//         onChange={handleFileUpload}
//         className="mb-4"
//       />

//       {excelData.length > 0 && (
//         <div>
//           <h3 className="text-lg font-bold mb-2">Imported Data:</h3>
//           <table className="min-w-full bg-white border">
//             <thead>
//               <tr>
//                 {Object.keys(excelData[0]).map((key) => (
//                   <th
//                     key={key}
//                     className="py-2 px-4 border-b text-left bg-gray-200"
//                   >
//                     {key}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {excelData.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {Object.values(row).map((value, colIndex) => (
//                     <td key={colIndex} className="py-2 px-4 border-b">
//                       {value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
//             onClick={handleSaveClick}
//           >
//             Save to Server
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImportExcel;


//-----


import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';

const ImportExcel = () => {
  const [excelData, setExcelData] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(jsonData); // Update state with the imported data
    };

    reader.readAsArrayBuffer(file);
  };

  const handleSaveToDisplay = () => {
    if (excelData.length > 0) {
      navigate('/dataDisplay', { state: { importedData: excelData } });
    } else {
      alert('No data to display. Please upload an Excel file first.');
    }
  };

  return (
    <div className="text-center mt-5">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {excelData.length > 0 && (
        <div>
          <h3 className="text-lg font-bold mb-2">Imported Data:</h3>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((key) => (
                  <th key={key} className="py-2 px-4 border-b text-left bg-gray-200">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} className="py-2 px-4 border-b">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleSaveToDisplay}
          >
            Display Imported Data
          </button>
        </div>
      )}
    </div>
  );
};

export default ImportExcel;
