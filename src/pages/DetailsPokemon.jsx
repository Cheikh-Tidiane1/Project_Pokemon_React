import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Components/CardPokemon.scss";
import "../css/style.css";
import "../css/normalize.css";
import pokemonLogo from "../../public/pokImg.svg";

function DetailPokemon() {
  let tab;
  const [pokemonData, setPokemonData] = useState({});
  let params = useParams();
  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, []);

  return (
    <>
      <h1>
        <img src={pokemonLogo} alt="Pokemon-Logo" />
      </h1>
      <main>
        <article>
          <figure>
            <picture>
              <img src={pokemonData.image} />
            </picture>
            <figcaption>
              <h2>{pokemonData.name}</h2>
            </figcaption>
          </figure>
        </article>
      </main>
    </>
  );
}

export default DetailPokemon;

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
