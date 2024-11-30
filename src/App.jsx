import { useState } from "react";
import Navbar from "./components/navBar";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
      <Contact />
      <Hero />
    </div>
  );
}
export default App;
