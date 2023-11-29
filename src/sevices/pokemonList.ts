import axios from "axios";
import { Pokemon_Base_Url } from "@hello/utils/constant";
import { IPokemonListResponse } from "@hello/interface/pokemonList";
import { handleResponse, IResponse } from "@hello/utils/hadleResponse";

interface IGetPokemonListResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonListResponse;
}

export const pokemonListServices = {
  getPokemonList: async (
    limit?: number,
    offset?: number
  ): Promise<IGetPokemonListResponse> => {
    try {
      const response = await axios.get(
        `${Pokemon_Base_Url}/pokemon?limit=${limit || 151}&offset=${
          offset || 0
        }`
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
