import { PokemonCardMain } from "@/Components/Cards/CardMain";
import { pokemonStore } from "@/Stores/PokemonStore";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getPokemon } = pokemonStore;
  const pokemon = getPokemon(+id);

  return <PokemonCardMain {...pokemon} />;
};
