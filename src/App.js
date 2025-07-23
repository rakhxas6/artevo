import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import PaymentPending from "./components/payment/PaymentPendingDialog";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import ScrollToTop from "./ScrollToTop";
import PaymentPendingDialog from "./components/payment/PaymentPendingDialog";

function App() {
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const handleCloseDialog = () => {
    setShowPaymentDialog(false);
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/payment-pending" element={<PaymentPending />} />
        </Routes>
        <Newsletter />
        <Footer />
        {showPaymentDialog && (
          <PaymentPendingDialog onClose={handleCloseDialog} />
        )}
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
