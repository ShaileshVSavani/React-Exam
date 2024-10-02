import { useLocation } from 'react-router-dom';

const DisplayData = () => {
  const location = useLocation();
  const { importedData } = location.state || { importedData: [] }; // Default to an empty array

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-6">Imported Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {importedData.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden bg-white transition-transform transform hover:scale-105">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-lg font-bold text-green-600 mb-2">${item.price}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
