export interface IPokemonApi {
  getPokemonList(offset: number, limit: number): Promise<IPokemonList>;

  getPokemonDetails(url: string): Promise<IPokemonDetails>;
}

export interface IPokemonList {
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: IAbilityItem[];
}

interface IAbilityItem {
  ability: IAbility;
}

interface IAbility {
  name: string;
  url: string;
}
