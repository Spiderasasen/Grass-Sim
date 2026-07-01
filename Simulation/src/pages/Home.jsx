import Header from "../conponents/Header.jsx";
import Footer from "../conponents/Footer.jsx";
import "../styles/main.css";
import GrassSim from "../conponents/GrassSim.jsx";

function Home() {

    return (
    <div>
      {/*the header*/}
      <Header/>

        {/*main.css area*/}
        <main>
            <h1>Welcome to Grass Simulation</h1>
            <GrassSim/>
        </main>

        <Footer/>
    </div>
    )
}
export default Home;