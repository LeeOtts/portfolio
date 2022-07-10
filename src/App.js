import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
//import { Container, Navbar, NavbarBrand } from "reactstrap";
//import Logo from "./app/assets/img/coding_with_whiskey.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import PhotographyPage from "./pages/PhotographyPage";
import VideographyPage from "./pages/VideographyPage";
import ThreeDPrintingPage from "./pages/ThreeDPrintingPage";
import InTheNewsPage from "./pages/InTheNewsPage";
import ContactPage from "./pages/ContactPage";


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="webdev" element={<WebDevelopmentPage />} />
                <Route path="photography" element={<PhotographyPage />} />
                <Route path="videography" element={<VideographyPage />} />
                <Route path="threedprinting" element={<ThreeDPrintingPage />} />
                <Route path="inthenews" element={<InTheNewsPage />} />
                <Route path="contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
