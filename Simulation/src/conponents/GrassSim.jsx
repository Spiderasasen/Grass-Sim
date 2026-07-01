import { useState } from "react";
import "../styles/grid-style.css";

function GrassSimulation() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [grid, setGrid] = useState([]);
    const [showHint, setShowHint] = useState(false);
    const [simButton, setSimButton] = useState(false);
    const [isSimulating, setIsSimulating] = useState(false);

    const createGrid = () => {
        setShowHint(true);
        setSimButton(true);

        const newGrid = Array.from(
            { length: rows },
            () => Array.from({ length: cols }, () => 0)
        );

        setGrid(newGrid);
    };

    const toggleCell = (r, c) => {
        const updated = grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                if (rowIndex === r && colIndex === c) {
                    return cell === 0 ? 1 : 0;
                }
                return cell;
            })
        );

        setGrid(updated);
    };

    const startSimulation = () => {
        setIsSimulating(true);

        let currentGrid = grid;

        const interval = setInterval(() => {
            const nextGrid = currentGrid.map((row, rIndex) =>
                row.map((cell, cIndex) => {
                    if (cell === 3) return 3;
                    if (cell > 0) return cell + 1;

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

                    return neighbors.some(n => n > 0) && Math.random() < 0.6 ? 1 : 0;
                })
            );

            setGrid(nextGrid);
            currentGrid = nextGrid;

            const allFilled = nextGrid.every(row => row.every(cell => cell === 3));
            if (allFilled) {
                clearInterval(interval);
                setIsSimulating(false);
            }
        }, 300);
    };

    return (
        <div className="simulation-wrapper">
            <h2>How much land are you going to add grass to?</h2>

            <div className="input-container">
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setRows(Number(e.target.value))}
                />
                <p> X </p>
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setCols(Number(e.target.value))}
                />
            </div>

            <button onClick={createGrid}>Create Grid</button>
            {showHint && <h4 id="hint">Please select where to add grass</h4>}

            {grid.length > 0 && (
                <div
                    className="grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 30px)`,
                        gap: "4px",
                        marginTop: "30px",
                    }}
                >
                    {grid.map((row, rIndex) =>
                        row.map((cell, cIndex) => (
                            <div
                                key={`${rIndex}-${cIndex}`}
                                className={`cell stage-${cell}`}
                                onClick={() => !isSimulating && toggleCell(rIndex, cIndex)}
                            ></div>
                        ))
                    )}
                </div>
            )}

            {simButton && (
                <button onClick={startSimulation} id="simButton">
                    Start Simulation
                </button>
            )}
        </div>
    );
}

export default GrassSimulation;
