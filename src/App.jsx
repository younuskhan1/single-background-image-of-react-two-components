
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import About from "./Routes/About";
import Contact from "./Routes/Contact";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}

export default App
