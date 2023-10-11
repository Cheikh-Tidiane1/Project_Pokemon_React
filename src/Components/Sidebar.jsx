import { useState } from "react";
import "./Sidebar.scss";
import pokeball from "../../public/pokéball.png";

export default function Sidebar(props) {
  
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        X
      </button>
      <h2>
        <img src={pokeball} alt="" />
        <p>Pokédex ({props.pokedex.length})</p>
      </h2>
      {props.pokedex.length != 0 ? (
        <ul>
          {props.pokedex.map((poke, i) => (
            <li key={i}>{poke.name}</li>
          ))}
        </ul>
      ) : (
        <div>Votre Pokédex est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        <img src={pokeball} alt="" />
        <p>Pokédex ({props.pokedex.length})</p>
      </button>
    </div>
  );
}
