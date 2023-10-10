// import './App.css'
import "./css/style.css";
import "./css/normalize.css";
import data from "./data/data.json";
import pokemonLogo from "../public/pokImg.svg";
import CardPokemon from "./Components/CardPokemon";
function App() {
  return (
    <>
      <div>
        <h1>
          <img src={pokemonLogo} alt="Pokemon-Logo" />
        </h1>
      </div>
      <main>
        {data.map((pokemon, index) => (
            <CardPokemon data={pokemon} key={index}/>
          ))}
      </main>
    </>
  );
}

export default App;
