// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../redux/ProductSlice';
// import { getAuth } from 'firebase/auth';

// const UserProducts = () => {
//     const dispatch = useDispatch();
//     const { products, loading, error } = useSelector((state) => state.products);
//     const auth = getAuth();
//     const user = auth.currentUser;

//     useEffect(() => {
//         dispatch(getProducts());
//     }, [dispatch]);

//     // Filter products by userId
//     const userProducts = user ? products.filter(product => product.userId === user.uid) : [];

//     if (loading) return <p className="text-center text-xl">Loading...</p>;
//     if (error) return <p className="text-red-500 text-center">{error}</p>;

//     return (
//         <div className="max-w-4xl mx-auto p-4">
//             <h2 className="text-2xl font-bold text-center mb-6">Your Products</h2>
//             {userProducts.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {userProducts.map(product => (
//                         <div key={product.id} className="bg-white rounded-lg shadow-md p-4 transition-transform transform  duration-500 hover:scale-105" >
//                             {/* Adjusted image classes for size without cropping */}
//                             <img
//                                 src={product.img}
//                                 alt={product.title}
//                                 className="w-full h-38 object-contain rounded-md mb-4"
//                             />
//                             <h3 className="text-lg font-semibold">{product.title}</h3>
//                             <p className="text-gray-600 mb-2">{product.description}</p>
//                             <p className="text-xl font-bold">${product.price}</p>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center text-lg text-gray-500">No products added by you.</p>
//             )}
//         </div>
//     );
// };

// export default UserProducts;

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
