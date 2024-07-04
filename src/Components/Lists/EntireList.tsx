import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { PokemonCardMini } from "../Cards/CardMini";
import { IPokemonCard } from "@/Models/Cards";
import { Loader } from "../Loader/Loader";
import { pokemonStore } from "@/Stores/PokemonStore";

import styles from "../../Styles/Modules/_pokemonList.module.scss";

export const EntireList = observer(() => {
  const area = "world";
  const { setPokemons, pokemons, isLoading } = pokemonStore;

  useEffect(() => {
    const handleScroll = async () => {
      if (
        document.visibilityState === "visible" &&
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !isLoading
      ) {
        await setPokemons();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className={`${styles.list} container`}>
        <h2 className="visually-hidden">pokemons world</h2>
        {pokemons.map((pokemon: IPokemonCard) => {
          return <PokemonCardMini key={pokemon.id} area={area} {...pokemon} />;
        })}
      </section>

      {isLoading || !pokemons || (pokemons.length === 0 && <Loader />)}
    </>
  );
});
