
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/ProductSlice'; // Import the action to add a product
import { getAuth } from 'firebase/auth';

const AddProduct = () => {
  console.log("AddProduct component rendered");
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ title: '', description: '', price: '', img: '' });
  const auth = getAuth();
  const userId = auth.currentUser?.uid; // Get the current user's ID

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      // Include the userId when dispatching the action
      dispatch(createProduct({ ...product, userId }));
      setProduct({ title: '', description: '', price: '', img: '' }); // Reset the form
    } else {
      alert("You need to be logged in to add a product.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-4">Add Product</h2>
    <input 
        type="text" 
        name="title" 
        value={product.title} 
        onChange={handleInputChange} 
        placeholder="Title" 
        required 
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input 
        type="text" 
        name="description" 
        value={product.description} 
        onChange={handleInputChange} 
        placeholder="Description" 
        required 
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input 
        type="number" 
        name="price" 
        value={product.price} 
        onChange={handleInputChange} 
        placeholder="Price" 
        required 
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input 
        type="text" 
        name="img" 
        value={product.img} 
        onChange={handleInputChange} 
        placeholder="Image URL" 
        required 
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button 
        type="submit" 
        className="bg-blue-500 text-white rounded-md px-4 py-2 transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
    >
        Add Product
    </button>
</form>

  );
};

export default AddProduct;
