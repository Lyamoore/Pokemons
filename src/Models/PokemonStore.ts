import { IPromiseBasedObservable } from "mobx-utils";
import { IPokemonCard } from "./Cards";

export interface IPokemonStore {
  // pokemons?: IPromiseBasedObservable<IPokemonCard[]>;
  setPokemons: () => Promise<void>;
  getPokemon: (id: number) => IPokemonCard | null;
  catchPokemon: (id: number) => void;
  getCatchPokemons: () => IPokemonCard[];
}
