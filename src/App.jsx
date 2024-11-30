import { useState } from "react";
import Navbar from "./components/navBar";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
export default App;
