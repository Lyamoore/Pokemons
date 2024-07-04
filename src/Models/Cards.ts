import { IPokemonDetails } from "./Api";

export interface IPokemonCard extends IPokemonDetails {
  isCaught: boolean;
  date?: string;
  area?: string;
}
