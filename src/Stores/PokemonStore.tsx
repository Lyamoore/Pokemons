import { IPokemonCard } from "@/Models/Cards";
import { getPokemonService } from "@/Services/GetPokemonService";

import { getCurrentDateTime } from "@/Services/getCurrentDateTime";
import { makeAutoObservable, runInAction } from "mobx";

class PokemonStore {
  constructor() {
    makeAutoObservable(this);
    this.loadCaughtPokemons();
  }

  pokemons: IPokemonCard[] = [];
  caughtPokemons: IPokemonCard[] = [];
  isLoading = false;

  setPokemons = async () => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const newPokemons = await getPokemonService.load();

      const updatedPokemons = newPokemons.map((newPokemon) => {
        const caughtPokemon = this.caughtPokemons.find(
          (cp) => cp.id === newPokemon.id
        );

        return {
          ...newPokemon,
          isCaught: caughtPokemon ? true : false,
          date: caughtPokemon ? caughtPokemon.date : null,
        };
      });

      runInAction(() => {
        this.pokemons = [...this.pokemons, ...updatedPokemons];
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        console.error("Ошибка при загрузке покемонов:", error);
      });
    }
  };

  getPokemon = (id: number) => {
    return this.pokemons.find((pokemon: IPokemonCard) => pokemon.id === id);
  };

  catchPokemon = (id: number) => {
    const updatedPokemons = this.pokemons.map((pokemon: IPokemonCard) => {
      if (pokemon.id === id) {
        const caughtPokemon = {
          ...pokemon,
          isCaught: true,
          date: getCurrentDateTime(),
        };
        this.caughtPokemons.push(caughtPokemon);

        return caughtPokemon;
      }

      this.saveCaughtPokemons();
      return pokemon;
    });

    this.pokemons = updatedPokemons;
  };

  getCatchPokemons = () => {
    return runInAction(() => {
      this.loadCaughtPokemons();
      return this.caughtPokemons;
    });
  };

  saveCaughtPokemons = () => {
    localStorage.setItem("caughtPokemons", JSON.stringify(this.caughtPokemons));
  };

  loadCaughtPokemons = () => {
    const storedCP = localStorage.getItem("caughtPokemons");

    if (storedCP) {
      this.caughtPokemons = JSON.parse(storedCP);
    }
  };
}

export const pokemonStore = new PokemonStore();