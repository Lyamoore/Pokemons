import { useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { Routing } from "./Routing/Routing";
import { pokemonStore } from "./Stores/PokemonStore";
import { observer } from "mobx-react-lite";

export const App = observer(() => {
  const { setPokemons } = pokemonStore;

  useEffect(() => {
    setPokemons();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Routing />
      </main>
    </>
  );
});
