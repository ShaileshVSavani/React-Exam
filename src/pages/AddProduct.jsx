
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
    <form onSubmit={handleSubmit}>
      {/* Add your input fields for title, description, price, and image URL */}
      <input type="text" name="title" value={product.title} onChange={handleInputChange} placeholder="Title" required />
      <input type="text" name="description" value={product.description} onChange={handleInputChange} placeholder="Description" required />
      <input type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" required />
      <input type="text" name="img" value={product.img} onChange={handleInputChange} placeholder="Image URL" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
