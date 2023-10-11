// import './App.css'
import "./css/style.css";
import "./css/normalize.css";
import data from "./data/data.json";
import pokemonLogo from "../public/pokImg.svg";
import CardPokemon from "./Components/CardPokemon";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <>
      <div className="header">
        <h1>
          <img src={pokemonLogo} alt="Pokemon-Logo" />
        </h1>
      </div>
      <main>
      <div id="sideBar"> 
        <Sidebar/>
      </div>
      {data.map((pokemon, index) => (
          <CardPokemon data={pokemon} key={index}/>
        ))}
      </main>
    </>
  );
}

export default App;
