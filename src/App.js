/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import PageNotFound from "./pages/404";
import ProductPage from "./pages/ProductPage";

import PRCPTionIImage from "./assets/images/glasses_2.jpg";
import PRCPTiveIImage from "./assets/images/prcptive-i.jpg";
import PRCPTiveIIImage from "./assets/images/prcptive-ii.jpg";
import PurchaseComplete from "./pages/PurchaseComplete";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cookies from "./pages/Cookies";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import ContactFormSubmitted from "./pages/ContactFormSubmitted";

function App() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      `}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/purchase/complete" element={<PurchaseComplete />} />
        <Route
          path="/products/prcption-i/v1-leopard"
          element={
            <ProductPage
              name="PRCPTion I"
              model="V1 Leopard"
              price="$20"
              description="The peak of optometric research and engineering."
              productImage={PRCPTionIImage}
            />
          }
        />
        <Route
          path="/products/prcptive-i/v1-catalina"
          element={
            <ProductPage
              name="PRCPTive I"
              model="V1 Catalina"
              price="$20"
              description="A beautiful compilation of successes and learned failures."
              productImage={PRCPTiveIImage}
            />
          }
        />
        <Route
          path="/products/prcptive-ii/v2-midnight"
          element={
            <ProductPage
              name="PRCPTive II"
              model="V2 Midnight"
              price="$20"
              description="A new innovation in the vision market."
              productImage={PRCPTiveIIImage}
              learnMoreRedirectLink="prcptive-ii/v2-midnight"
            />
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/submitted" element={<ContactFormSubmitted />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
