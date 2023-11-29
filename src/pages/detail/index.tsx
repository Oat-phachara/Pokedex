import { IPokemonDetailResponse } from "@hello/interface/pokemonDetail";
import { pokemonDetailServices } from "@hello/sevices";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

const DetailPages = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });
  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
            tier: response.data.base_experience,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };
  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div className="w=[90%] m-[auto] max-w-[1100px] ">
      <div className="flex justify-center">
        <img
          src="/public/images/Pokédex_logo.png"
          className="max-h-[70px] mt-[20px] "
          alt=""
        />
      </div>
      <div className="w-[90%] max-w-[600px] m-[auto] mt-16 ">
        <Link
          to={"/"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
        >
          Back
        </Link>
        {pokemon.data && (
          <div className=" ">
            <div>
              <img
                className=" max-h-[400px] h-[500px] p=[40px] w-full"
                src={pokemon.data?.image}
                alt="product image"
              />
            </div>
            <div className="mt-[15px] w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[275px] m-[auto]">
              <div className="px-5 pb-5 ">
                <div className="flex justify-between mt-[10px]">
                  <a href="#">
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
                      {pokemon.data?.name}
                    </h5>
                  </a>
                  <a href="#">
                    <div>
                      <div className="grid grid-cols-2 gap-x-[20px]">
                        <div className="flex  ">
                          <div>
                            <div className="text-[#4CAFEB]">height</div>
                            <div className="text-white">
                              {(pokemon.data?.height / 10).toFixed(2)} m.
                            </div>
                          </div>
                        </div>
                        <div className="flex ">
                          <div>
                            <div className="text-[#4CAFEB]">weight</div>
                            <div className="text-white">
                              {(pokemon.data?.weight / 10).toFixed(2)} kg.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className=" grid sm:grid-cols-2  gap-10 grid-cols-1 mt-[40px]">
                  <div className="flex items-center mt-[-20px] mb-5 gap-8 justify-between">
                    <div className=" font-semibold text-xl flex items-center flex items-center space-x-1 rtl:space-x-reverse text-[white] ">
                      Abilities
                    </div>
                    <span className="grid grid-cols gap-1 bg-blue-100 text-blue-800 text-x font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {pokemon.data.abilities.map((item, ind) => {
                        return (
                          <span
                            key={ind}
                            className={`badge-type-${item.ability.name} px-2 py-1 rounded-xl capitalize `}
                          >
                            {item.ability.name}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                  <div className="mt-[-60px]">
                    <span className="  text-sm font-semibold px-2.5 py-0.5 rounded  ms-3 mt-[10px]">
                      <h3 className="text-white font-semibold">status</h3>

                      {pokemon.data.stats.map((item) => {
                        return (
                          <div
                            className={`flex  px-5 py-1  rounded-xl capitalize justify-between  `}
                          >
                            <div className="text-[#4CAFEB]">
                              {item.stat.name}
                            </div>
                            <div className="text-white">{item.base_stat}</div>
                          </div>
                        );
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-l font-semibold text-gray-900 dark:text-brown mr-[12px]">
                    {pokemon.data.types.map((item, ind) => {
                      return (
                        <span
                          key={ind}
                          className={`badge-type-${item.type.name} px-2 py-1 rounded-xl capitalize `}
                        >
                          {item.type.name}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailPages;
