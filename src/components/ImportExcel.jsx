
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
