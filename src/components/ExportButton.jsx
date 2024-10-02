import axios from 'axios';
import * as XLSX from 'xlsx';

const ExportButton = () => {
  const handleExport = async () => {
    try {
      // Fetch the data from the JSON server
      const response = await axios.get('http://localhost:3000/products');
      const products = response.data;

      // Convert JSON to a worksheet
      const worksheet = XLSX.utils.json_to_sheet(products);

      // Create a new workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');

      // Generate a binary Excel file
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

      // Create a Blob from the Excel buffer and generate a URL for download
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element for downloading
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'products.xlsx');
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the temporary link
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={handleExport}>Export to Excel</button>;
};

export default ExportButton;
