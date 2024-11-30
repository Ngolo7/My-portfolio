import { useState } from "react";
import Navbar from "./components/navBar";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
      <Contact />
    </div>
  );
}
export default App;
