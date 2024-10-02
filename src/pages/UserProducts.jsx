
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../redux/ProductSlice";
import { getAuth } from "firebase/auth";

const UserProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const auth = getAuth();
  const user = auth.currentUser;
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Filter products by userId
  const userProducts = user
    ? products.filter((product) => product.userId === user.uid)
    : [];

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdate = (id) => {
    const updatedProduct = {
      title: updatedTitle || undefined,
      description: updatedDescription || undefined,
      price: updatedPrice || undefined,
    };
    dispatch(updateProduct({ id, product: updatedProduct }));
    setEditingProduct(null); // Close the edit form
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Your Products</h2>
      {userProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userProducts.map((product) => (
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

              {/* Update Button */}
              <button
                className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2 transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                onClick={() => {
                  setEditingProduct(product.id);
                  setUpdatedTitle(product.title);
                  setUpdatedDescription(product.description);
                  setUpdatedPrice(product.price);
                }}
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                className="mt-2 bg-red-500 text-white rounded-md px-4  mx-2 py-2 transition duration-200 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>

              {/* Editing Form */}
              {editingProduct === product.id && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="New Title"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    placeholder="New Description"
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <input
                    type="number"
                    placeholder="New Price"
                    value={updatedPrice}
                    onChange={(e) => setUpdatedPrice(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200"
                    onClick={() => handleUpdate(product.id)}
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">
          No products added by you.
        </p>
      )}
    </div>
  );
};

export default UserProducts;