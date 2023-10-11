import { useState } from "react";
import "./CardPokemon.scss";
import "../css/style.css";
import "../css/normalize.css";
import iconAdd from "../../public/add-circle-line.svg";
export default function CardPokemon(props) {
  const [isOpen, setIsOpen] = useState(Boolean);
  let pokemon = props.data;
  return (
    <article
      key={"Pokemon" + props.index}
      id="pokeArticle"
      data-reverse={isOpen}
      onClick={(e) => {
        if (isOpen === false) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="cardInner"
        style={{
          backgroundColor: getColorHexa(pokemon.apiTypes[0].name),
          borderColor: getColorHexa(pokemon.apiTypes[0].name),
        }}
      >
        <span
          className="addToPokedex"
          onClick={(e) => {
            e.stopPropagation();
            props.setPokedex((prevPokedex) => {
              return [
                { id: pokemon.pokedexId, name: pokemon.name },
                ...prevPokedex,
              ];
            });
          }}
        >
          <img src={iconAdd} />
        </span>
        <figure className="cardFront">
          <picture>
            <img src={pokemon.image} alt={pokemon.name} />
          </picture>
          <figcaption>
            <span className="types">{pokemon.apiTypes[0].name}</span>
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
        <div className="cardBack">
          <a href="#">Voir plus</a>
        </div>
      </div>
    </article>
  );
}

function getColorHexa(colorType) {
  let color;

  switch (colorType) {
    case "Eau":
      color = "blue";
      break;

    case "Plante":
      color = "green";
      break;

    case "Poison":
      color = "#D850C2";
      break;

    case "Vol":
      color = "#738DDB";
      break;

    case "Feu":
      color = "orange";
      break;

    case "Insecte":
      color = "#70B901";
      break;

    case "Électrik":
      color = "#FFD244";
      break;

    case "Sol":
      color = "#CD793F";
      break;

    case "Fée":
      color = "pink";
      break;

    case "Combat":
      color = "darkred";
      break;

    case "Psy":
      color = "#FD6960";
      break;

    case "Acier":
      color = "#246A79";
      break;

    case "Glace":
      color = "#67D1C8";
      break;

    case "Roche":
      color = "#CBB866";
      break;

    case "Dragon":
      color = "#1C6ABB";
      break;

    default:
      color = "grey";
      break;
  }

  return color;
}
