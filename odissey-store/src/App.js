import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router } from "@reach/router";

//Pages
import Message from "./Pages/Message";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";



function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Home path="/" />
        <Message path="/message" />
       
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
