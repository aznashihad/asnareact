import React from "react";
import HomePage from "../pages/HomePage";
import SupportPage from "../pages/SupportPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";


import ProductDetailPage from "../pages/ProductDetailPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

import CartPage from "../pages/CartPage";

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="productdetails/:id" element={<ProductDetailPage />} />

      <Route path="support" element={<SupportPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
    
   
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default UserRouter;
