// import './App.css'
import "./css/style.css";
import "./css/normalize.css";
import data from "./data/data.json";

function App() {

  return (
    <>
      <main>
      {data.map((pokemon, index)=> (
      <article key={'Pokemon'+ index}>
        <figure>
          <picture>
            <img src={pokemon.image} alt={pokemon.name} />
          </picture>
          <figcaption>
            <span className='types'>{pokemon.apiTypes[0].name}</span>
            <h2>{pokemon.name}</h2>
            <ol>
              <li>Points de vie : {pokemon.stats.HP}</li>
              <li>Attaque : {pokemon.stats.attack}</li>
              <li>Défense : {pokemon.stats.defense}</li>
              <li>Attaque spécial : {pokemon.stats.special_attack}</li>
              <li>Vitesse : {pokemon.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>
      </article>
      ))
      }
      </main>
    </>
  )
}

export default App
