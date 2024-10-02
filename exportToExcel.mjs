// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import xlsx from 'xlsx';

// // Convert __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const convertJsonToExcel = () => {
//   const dbPath = path.join(__dirname, 'db.json');
//   const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

//   const products = dbData.products;

//   const workbook = xlsx.utils.book_new();
//   const worksheet = xlsx.utils.json_to_sheet(products);
//   xlsx.utils.book_append_sheet(workbook, worksheet, 'Products');

//   const exportPath = path.join(__dirname, 'products.xlsx');
//   xlsx.writeFile(workbook, exportPath);

//   console.log('Excel file created successfully:', exportPath);
// };

// convertJsonToExcel();


//------------------



import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'xlsx';

// Convert __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const convertJsonToExcel = () => {
  const dbPath = path.join(__dirname, 'db.json');
  const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  const products = dbData.products;

  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(products);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Products');

  const exportPath = path.join(__dirname, 'products.xlsx');
  xlsx.writeFile(workbook, exportPath);

  console.log('Excel file created successfully:', exportPath);
};

convertJsonToExcel();
