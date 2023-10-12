import "./css/style.css";
import "./css/normalize.css";
import data from "./data/data.json";
import pokemonLogo from "../public/pokImg.svg";
import CardPokemon from "./Components/CardPokemon";
import Sidebar from "./Components/Sidebar";
import { useState, useEffect } from "react";
import Spinner from "./Components/Spinner";
function App() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
      .then((response) => response.json())
      .then((data) => {
        setDataPokemon(data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
        {loading ? (
          dataPokemon.map((pokemon, index) => (
            <CardPokemon
              pokedex={pokedex}
              setPokedex={setPokedex}
              data={pokemon}
              key={index}
            />
          ))
        ) : (
          <Spinner />
        )}
      </main>
    </>
  );
}

export default App;
