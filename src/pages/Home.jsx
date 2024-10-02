
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getProducts
// } from "../redux/ProductSlice";
// import ExportButton from "../components/ExportButton";
// import ImportExcel from "../components/ImportExcel";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);


//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   if (loading) return <p className="text-center text-xl">Loading...</p>;
//   if (error) return <p className="text-red-500 text-center">{error}</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
//       {products.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-lg p-6 transition-transform transform duration-300 hover:scale-105"
//             >
//               <img
//                 src={product.img}
//                 alt={product.title}
//                 className="w-full h-48 object-contain rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
//               <p className="text-gray-700 mb-2">{product.description}</p>
//               <p className="text-xl font-bold text-green-600 mb-4">
//                 ${product.price}
//               </p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-lg text-gray-500">
//           No products added by you.
//         </p>
//       )}
//        <ExportButton/><ImportExcel/>
//     </div>
   
//   );
// };

// export default Home;



//=====

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductSlice";
import ExportButton from "../components/ExportButton";
import ImportExcel from "../components/ImportExcel";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform duration-300 hover:scale-105"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-xl font-bold text-green-600 mb-4">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">
          No products added by you.
        </p>
      )}
      {/* Pass the fetched products to the ExportButton */}
      <ExportButton products={products} />
      <ImportExcel />
    </div>
  );
};

export default Home;
