import { IPokemonDetails, IPokemonList, IPokemonApi } from "@/Models/Api";
import axios from "axios";

class PokemonApi implements IPokemonApi {
  private static instance: PokemonApi;

  private constructor() {}

  // синглтон
  public static getInstance(): PokemonApi {
    if (!PokemonApi.instance) {
      PokemonApi.instance = new PokemonApi();
    }
    return PokemonApi.instance;
  }

  async getPokemonList(offset: number, limit: number): Promise<IPokemonList> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
    );

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return response.data;
  }

  async getPokemonDetails(url: string): Promise<IPokemonDetails> {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return response.data;
  }

  async getPokemonSkill(url: string): Promise<IPokemonDetails> {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return response.data;
  }
}

export const pokemonApi = PokemonApi.getInstance();
