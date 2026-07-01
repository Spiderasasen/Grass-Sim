import Header from "../conponents/Header.jsx";
import Footer from "../conponents/Footer.jsx";
import grassTypes from "../data/grass.json";
import "../styles/grass-type-card.css";

function Grass_Type() {
    return (
        <div>
            <Header/>

            {/*main section*/}
            <main>
                <h1>Grass Types</h1>
                <div className="grass-card-container">
                    {grassTypes.grassTypes.map((grassType) => (
                        <div className="grass-card" key={grassType.id}>
                            <h2 className="grass-card-title">{grassType.name}</h2>
                            <p className="grass-card-description">{grassType.description}</p>

                            <div className="grass-card-info">
                                <span className="grass-tag">{grassType.region}</span>
                                <span className="grass-tag">{grassType.shadeTolerance} shade</span>
                                <span className={`grass-tag ${grassType.category}`}>
                    {grassType.category}
                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </main>

            <Footer/>
        </div>
    )
}
export default Grass_Type;