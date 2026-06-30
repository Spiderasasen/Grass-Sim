import Header from "../conponents/Header.jsx";
import Footer from "../conponents/Footer.jsx";
import "../styles/main.css";

function Home() {
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
                    <input type="number" placeholder="0"/>
                    <p>X</p>
                    <input type="number" placeholder="0"/>
                </div>

                <button>Create Grid</button>
            </div>
        </main>

        <Footer/>
    </div>
    )
}
export default Home;