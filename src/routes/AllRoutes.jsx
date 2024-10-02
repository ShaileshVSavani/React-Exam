import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import UserProducts from "../pages/UserProducts";
import DisplayData from "../components/DisplayData";


const AllRoutes = () => {
  return (
    <div>
      {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="addProducts" element={<AddProduct />} />
            <Route path='/login' element={<Login/>} />
            <Route path ='signup' element={<SignUp/>} />
            
        </Routes> */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
         <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserProducts />
            </PrivateRoute>
          }
        />
          <Route
          path="/dataDisplay"
          element={
            <PrivateRoute>
              <DisplayData />
            </PrivateRoute>
          }
        />
        <Route
          path="/addProducts"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
