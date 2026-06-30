import Header from "../conponents/Header.jsx";
import Footer from "../conponents/Footer.jsx";
import "../styles/main.css";
import {useState} from "react";
import "../styles/grid-style.css"

function Home() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [grid, setGrid] = useState([]);
    const hint = document.getElementById("hint");

    //creates the grid
    const createGrid = () => {
        hint.style.display = "block";

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
                    <p> X </p>
                    <input type="number" placeholder="0" onChange={(e) => setCols(Number(e.target.value))}/>
                </div>

                <button onClick={createGrid}>Create Grid</button>
                <h4 id="hint">Please select where to add grass</h4>
            </div>

            {/*all this code to make the grid*/}
            {grid.length > 0 && (
                <div
                    className="grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 30px)`,
                        gap: "4px",
                        marginTop: "30px"
                    }}
                >
                    {/*  grid cells will be created here  */}
                    {grid.map((row, rIndex) =>
                    row.map((cell, cIndex) => (
                        <div
                            key={`${rIndex}-${cIndex}`}
                            className="cell"
                        >
                        </div>
                    )))}
                </div>
            )}
        </main>

        <Footer/>
    </div>
    )
}
export default Home;