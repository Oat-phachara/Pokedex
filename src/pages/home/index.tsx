import PokemonCard from "@hello/components/PokemonCard";
import Searchform from "@hello/components/searchform";
import { usePokemonListStore } from "@hello/store/pokemonList";
import ReactLoading from "react-loading";

const HomePages = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore();
  return (
    <div className="w=[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/public/images/Pokédex_logo.png"
          className="max-h-[70px] mt-[20px] "
          alt=""
        />
      </div>
      <Searchform />
      {fetchPokemon.loading && (
        <div className="h-[600px] flex justify-center items-center">
          <ReactLoading type="cylon" color="#black" />
        </div>
      )}
      {!fetchPokemon.loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[40px] mx-4">
          {pokemon.data?.map((item, ind) => {
            return (
              <PokemonCard
                key={ind}
                image={item.image || ""}
                name={item.name}
                id={item.id}
                types={item.types}
                tier={item.tier}
              />
            );
          })}
        </div>
      )}
      <br />
    </div>
  );
};
export default HomePages;
