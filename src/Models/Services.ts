import { IPokemonDetails } from "./Api";
import { IPokemonCard } from "./Cards";

export interface IPokemonGetService {
  getAllPokemons(offset: number, limit: number): Promise<IPokemonDetails[]>;

  load(): Promise<IPokemonCard[]>;
}
