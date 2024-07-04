import { IPokemonApi } from "@/Models/Api";
import { IPokemonCard } from "@/Models/Cards";
import { IPokemonGetService } from "@/Models/Services";
import { pokemonApi } from "@/Transport/PokemonApi";

class GetPokemonService implements IPokemonGetService {
  private static instance: GetPokemonService;
  private pokemonApi: IPokemonApi = pokemonApi;
  private offset: number = 0;
  private limit: number = 20;
  private isLoading: boolean = false;

  private constructor() {}

  // синглтон
  public static getInstance(): GetPokemonService {
    if (!GetPokemonService.instance) {
      GetPokemonService.instance = new GetPokemonService();
    }
    return GetPokemonService.instance;
  }

  // получение определённого списка покемонов из api
  public async getAllPokemons(
    offset: number = 0,
    limit: number = 20,
  ): Promise<IPokemonCard[]> {
    const pokemonList = await this.pokemonApi.getPokemonList(offset, limit);

    const detailsPromises = pokemonList.results.map(
      async (pokemon: { url: string }) => {
        const details = await this.pokemonApi.getPokemonDetails(pokemon.url);

        return { ...details, isCaught: false };
      },
    );

    const detailsList = await Promise.all(detailsPromises);

    return detailsList;
  }

  public async load(): Promise<IPokemonCard[]> {
    if (this.isLoading) return [];

    this.isLoading = true;

    const newPokemons = await this.getAllPokemons(this.offset, this.limit);

    this.offset += this.limit;
    this.isLoading = false;

    return newPokemons;
  }
}

export const getPokemonService = GetPokemonService.getInstance();
