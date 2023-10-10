// import './App.css'
import "./css/style.css";
import "./css/normalize.css";
import data from "./data/data.json";
import pokemonLogo from "../public/pokImg.svg"
function App() {
  function getColorHexa (colorType) {
    let color ;

    switch (colorType) {
      case 'Eau':
        color = 'blue';
        break;

      case 'Plante':
        color = 'green';
        break;

      case 'Poison':
        color = '#D850C2';
        break;

      case 'Vol':
        color = '#738DDB';
        break;

      case 'Feu':
        color = 'orange';
        break;

      case 'Insecte':
        color = '#70B901';
        break;

      case 'Électrik':
        color = '#FFD244';
        break;

      case 'Sol':
        color = '#CD793F';
        break;

      case 'Fée':
        color = 'pink';
        break;

      case 'Combat':
        color = 'darkred';
        break;

      case 'Psy':
        color = '#FD6960';
        break;

      case 'Acier':
        color = '#246A79';
        break;

      case 'Glace':
        color = '#67D1C8';
        break;

      case 'Roche':
        color = '#CBB866';
        break;

      case 'Dragon':
        color = '#1C6ABB';
        break;

      default:
        color = 'grey';
        break;
    }

    return color ;
  }
  return (
    <>
      <div>
        <h1><img src={pokemonLogo} alt="Pokemon-Logo" /></h1>
      </div>
      <main>
      {data.map((pokemon, index)=> (
      <article key={'Pokemon'+ index} style={{backgroundColor: getColorHexa(pokemon.apiTypes[0].name) , borderColor: getColorHexa(pokemon.apiTypes[0].name) }}>
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
