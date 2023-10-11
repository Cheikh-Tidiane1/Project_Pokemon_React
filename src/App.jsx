// import './App.css'
import "./css/style.css";
import "./css/normalize.css";
import data from "./data/data.json";
import pokemonLogo from "../public/pokImg.svg";
import CardPokemon from "./Components/CardPokemon";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
function App() {
  const [pokedex, setPokedex] = useState([]);
  return (
    <>
      <div className="header">
        <h1>
          <img src={pokemonLogo} alt="Pokemon-Logo" />
        </h1>
      </div>
      <main>
        <div id="sideBar">
          <Sidebar pokedex={pokedex} setPokedex={setPokedex} />
        </div>
        {data.map((pokemon, index) => (
          <CardPokemon
            pokedex={pokedex}
            setPokedex={setPokedex}
            data={pokemon}
            key={index}
          />
        ))}
      </main>
    </>
  );
}

export default App;
