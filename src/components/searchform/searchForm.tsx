import { generationList, typesList, sortList } from "@hello/utils/optionlist";
import { useSearchForm } from "@hello/components/searchform";

const SearchForm = () => {
  const { fieldKeyword, fieldGeneration, fieldSort, fieldType } =
    useSearchForm();

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-[20px]">
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
        >
          Generation
        </label>
        <select
          {...fieldGeneration}
          id="generation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {generationList.map((items, index) => {
            return (
              <option key={"generation-key-" + index} value={index}>
                {items.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="type"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
        >
          Type
        </label>
        <select
          {...fieldType}
          id="type"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {typesList.map((items, index) => {
            return (
              <option key={"type-key-" + index} value={items}>
                {items}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {" "}
        <label
          htmlFor="sortList"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
        >
          Sort By
        </label>
        <select
          {...fieldSort}
          id="sortList"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {sortList.map((items, index) => {
            return (
              <option key={"sort-key-" + index} value={items}>
                {items}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {" "}
        <label
          htmlFor="inputSearch"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
        >
          Search
        </label>
        <input
          {...fieldKeyword}
          id="inputSearch"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </form>
  );
};

export default SearchForm;
