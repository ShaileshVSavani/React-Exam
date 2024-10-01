
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductSlice';
import { getAuth } from 'firebase/auth';

const UserProducts = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Check if products are fetched
    console.log("Fetched Products:", products);

    // Check user ID
  console.log("Current User ID:", user?.uid);
  console.log("uid:", user?.uid);

    // Filter products by userId
    const userProducts = user ? products.filter(product => product.userId === user.uid) : [];

    // Check filtered products
    console.log("User Products:", userProducts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {userProducts.length > 0 ? (
                userProducts.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <img src={product.img} alt={product.title} />
                    </div>
                ))
            ) : (
                <p>No products added by you.</p>
            )}
        </div>
    );
};

export default UserProducts;
