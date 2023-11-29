import axios from "axios";
import { Pokemon_Base_Url } from "@hello/utils/constant";
import { IPokemonDetailResponse } from "@hello/interface/pokemonDetail";
import { IResponse, handleResponse } from "@hello/utils/hadleResponse";

interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonDetailResponse;
}

export const pokemonDetailServices = {
  getPokemonDetail: async (
    name?: string
  ): Promise<IGetPokemonDetailResponse> => {
    try {
      const response = await axios.get(`${Pokemon_Base_Url}/pokemon/${name}`);
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
