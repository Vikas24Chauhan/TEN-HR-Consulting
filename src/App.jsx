import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home"; // Ensure this path is correct
import Navbar from "./components/Navbar"; // Ensure this path is correct
import PeoEor from "./components/peo&eor/PeoEor";
import Recruitment from "./components/recruitment/Recruitment";
import HrConsulting from "./components/hrConsulting/HrConsulting";
import ManagedServices from "./components/managedServices/ManagedServices";
import Resources from "./components/resources/Resources";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";
import Jobvac from "./components/jobvacancie/Jobvac"


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peo&eor" element={<PeoEor/>}/>
        <Route path="/recuritment" element={<Recruitment/>}/>
        <Route path="/hrConsulting" element={<HrConsulting/>}/>
        <Route path="/managedServices" element={<ManagedServices/>}/>
        <Route path="/resources" element={<Resources />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/jobvacancies" element={<Jobvac/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



