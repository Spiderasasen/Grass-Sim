import Header from "../conponents/Header.jsx";
import Footer from "../conponents/Footer.jsx";
import "../styles/main.css";
import {useState} from "react";
import "../styles/grid-style.css"

function Home() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [grid, setGrid] = useState([]);
    const [showHint, setShowHint] = useState(false);
    const [simButton, setSimButton] = useState(false);
    const [isSimulating, setIsSimulating] = useState(false);

    //creates the grid
    const createGrid = () => {
        setShowHint(true);
        setSimButton(true);

        console.log(`Rows: ${rows}, Cols: ${cols}`);
        const newGrid = Array.from(
            {length: rows},
            () => Array.from({length: cols},
                () => 0)
        );
        setGrid(newGrid);
    }

    //saves the area where the user wants to add grass
    const toggleCell = (r, c) => {
        console.log(`Clicked on row: ${r}, col: ${c}`);
        const updated = grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                if (rowIndex === r && colIndex === c){
                    console.log(cell)
                    return cell === 0 ? 1 : 0;
                }
                console.log(cell)
                return cell;
            })
        );

        //redraws the grid
        setGrid(updated);
    }

    const startSimulation = () => {
        console.log("Simulation started");

        setIsSimulating(true);

        let currentGrid = grid;

        const interval = setInterval(() => {
            const nextGrid = currentGrid.map((row, rIndex) =>
                row.map((cell, cIndex) => {
                    if (cell === 3) return 3; //already grass

                    if (cell > 0) return cell + 1;

                    //checking neighbors
                    const neighbors = [
                        currentGrid[rIndex - 1]?.[cIndex],
                        currentGrid[rIndex + 1]?.[cIndex],
                        currentGrid[rIndex]?.[cIndex - 1],
                        currentGrid[rIndex]?.[cIndex + 1],
                        currentGrid[rIndex - 1]?.[cIndex - 1],
                        currentGrid[rIndex - 1]?.[cIndex + 1],
                        currentGrid[rIndex + 1]?.[cIndex - 1],
                        currentGrid[rIndex + 1]?.[cIndex + 1],
                    ];

                    //if any neighbor is at least stage 1, sprout here
                    return neighbors.some(n => n > 0) && Math.random() < 0.6 ? 1 : 0;
                })
            );

            //update the grid
            setGrid(nextGrid);

            //update the reference
            currentGrid = nextGrid;

            //stop when fully grown
            const allFilled = nextGrid.every(row => row.every(cell => cell === 3));
            if (allFilled){
                clearInterval(interval);
                setIsSimulating(false);
                console.log("Simulation finished");
            }
        }, 300);
    };

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
                {showHint && <h4 id="hint">Please select where to add grass</h4>}
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
                            className={`cell stage-${cell}`}
                            onClick={() => !isSimulating && toggleCell(rIndex, cIndex)}
                        >
                        </div>
                    )))}
                </div>
            )}
            {simButton && <button onClick={startSimulation} id="simButton">Start Simulation</button>}
        </main>

        <Footer/>
    </div>
    )
}
export default Home;