import { Type } from "@hello/interface/pokemonDetail";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface pokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
  tier: any;
}
function pokemonCard({ image, name, id, types, tier }: pokemonCardProps) {
  const [tierList, setTierList] = useState<boolean[]>([]);
  const calcurateTier = (tier: any) => {
    if (Number(tier) > 200) {
      setTierList([true, true, true, true, true]);
    } else if (Number(tier) > 100) {
      setTierList([true, true, true, false, false]);
    } else if (Number(tier) > 60) {
      setTierList([true, true, false, false, false]);
    } else if (Number(tier) > 1) {
      setTierList([true, false, false, false, false]);
    } else {
      setTierList([true, true, true, true, true]);
    }
  };

  useEffect(() => {
    calcurateTier(tier);
  }, [tier]);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[300px] h-full m-[auto]">
      <Link to={`/detail/${name}`}>
        <img
          className="p-8 rounded-t-lg max-h-[218px] h-[218px] p=[40px] w-full"
          src={image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5 mt-[-8px] ">
        <div className="flex justify-between ">
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              {name}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              # {id}
            </h5>
          </a>
        </div>

        <div className="flex items-center mt-2.5 mb-5 mt-[15px]">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {tierList.map((item, ind) => {
              return (
                <svg
                  key={ind}
                  className={
                    item
                      ? "w-4 h-4 text-yellow-300"
                      : "w-4 h-4 text-gray-200 dark:text-gray-600"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            })}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {tier + ".0"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-l font-semibold text-gray-900 dark:text-brown mr-[12px]">
            {types.map((item, ind) => {
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
          <Link to={`/detail/${name}`}>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Link
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default pokemonCard;