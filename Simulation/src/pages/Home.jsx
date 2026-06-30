import Header from "../conponents/Header.jsx";
import Footer from "../conponents/Footer.jsx";
import "../styles/main.css";
import {useState} from "react";

function Home() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [grid, setGrid] = useState([]);

    const createGrid = () => {
        console.log(`Rows: ${rows}, Cols: ${cols}`);
        const newGrid = Array.from(
            {length: rows},
            () => Array.from({length: cols},
                () => false)
        );
        setGrid(newGrid);
    }

    return (
    <div>
      {/*the header*/}
      <Header/>

        {/*main.css area*/}
        <main>
            <h1>Welcome to Grass Simulation</h1>

            {/*main location for creating the grid*/}
            <div>
                <h2>How much land are you going to add grass to?</h2>

                {/*where the user will input the size of the grid*/}
                <div className="input-container">
                    <input type="number" placeholder="0" onChange={(e) => setRows(Number(e.target.value))}/>
                    <p>X</p>
                    <input type="number" placeholder="0" onChange={(e) => setCols(Number(e.target.value))}/>
                </div>

                <button onClick={createGrid}>Create Grid</button>
            </div>

            {grid && <div className="grid-container">
                {/*  grid cells will be created here  */}
            </div>}
        </main>

        <Footer/>
    </div>
    )
}
export default Home;