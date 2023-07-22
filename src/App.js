import React from "react";
import "./App.css";
import Agency from "./components/agency/Agency";
import Business from "./components/business/Business";
import Client from "./components/client/Client";
import Navbar from "./components/drawer/Drawer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Business />
      <Agency/>
      <Client />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
