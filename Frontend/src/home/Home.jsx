import React from 'react'
import Navbar from "../components/Navbar"; // Ensure this matches the actual filename
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook/>
      <Footer />
    </>
  )
}

export default Home
