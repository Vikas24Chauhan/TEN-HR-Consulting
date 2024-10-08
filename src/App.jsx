import "./App.css";
import Resources from "./components/resources/Resources";
import Navbar from "./components/Navbar";
// import Home from "./components/home/Home";
import PeoEor from "./components/services/peo&eor/PeoEor";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Navbar />
      <PeoEor />
    </>
  );
}

export default App;
