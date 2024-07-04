import { PokemonCardMini } from "../Cards/CardMini";
import { IPokemonCard } from "@/Models/Cards";
import { Link } from "react-router-dom";
import { pokemonStore } from "@/Stores/PokemonStore";
import { observer } from "mobx-react-lite";

import styles from "../../Styles/Modules/_pokemonList.module.scss";

export const Catchist = observer(() => {
  const area = "inventory";
  const { getCatchPokemons } = pokemonStore;
  const catchPokemons = getCatchPokemons();

  return (
    <section className={`${styles.list} container`}>
      <h2 className="visually-hidden">pokemons inventory</h2>
      {catchPokemons.map((pokemon: IPokemonCard) => {
        return <PokemonCardMini key={pokemon.id} area={area} {...pokemon} />;
      })}

      {!catchPokemons ||
        (catchPokemons.length === 0 && (
          <>
            <h3>
              While you don't have any pokémon, try going to Pokémon World and
              catch some!
            </h3>
            <Link to="/pokemons">
              <button type="button" className="btn btn-primary btn-lg">
                Go Catch Pokémon
              </button>
            </Link>
          </>
        ))}
    </section>
  );
});
