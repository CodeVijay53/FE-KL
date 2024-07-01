import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
