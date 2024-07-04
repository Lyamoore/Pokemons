import { IPokemonCard } from "@/Models/Cards";
import { capitalizeFirstLetter } from "@/Services/Capitalize";
import { pokemonStore } from "@/Stores/PokemonStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import styles from "../../Styles/Modules/_pokemonList.module.scss";

export const PokemonCardMini = observer(
  ({ id, name, sprites, isCaught, area }: IPokemonCard) => {
    const { catchPokemon } = pokemonStore;
    const { front_default: img } = sprites;
    const pokemonName = capitalizeFirstLetter(name);

    const handleClick = (): void => {
      catchPokemon(id);
    };

    return (
      <div className={`${styles.list__card} card`} style={{ width: "16rem" }}>
        <Link to={`/pokemons/${id}`}>
          <img src={img} className="card-img-top" alt={pokemonName} />
        </Link>
        <div className="card-body">
          <h3 className="card-title h5">{pokemonName}</h3>
          <p className="card-text">Id: {id}</p>
          {area === "world" ? (
            <button
              type="button"
              className="btn btn-primary pokemon-btn"
              style={{
                marginTop: "10px",
              }}
              disabled={isCaught}
              onClick={handleClick}
            >
              {!isCaught ? "Catch!" : "Caught"}
            </button>
          ) : null}
        </div>
      </div>
    );
  },
);
