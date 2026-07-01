import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css"
import Grass_Type from "./pages/Grass_Type.jsx";

function App(){
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="grass-types" element={<Grass_Type/>}/>
        </Routes>
      </Router>
  );
}
export default App