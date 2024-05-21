import { IoSearchCircle } from "react-icons/io5";

const SearchForm = ({ searchQuery, setSearchQuery, handleSearchClick }) => {
  return (
    <form className="w-[100%] md:w-[90%] lg:w-[30%] flex items-center md:justify-end justify-end ml-[60px] sm:ml-0 md:ml-0 lg:ml-0">
      <input
        className="w-[50%] sm:[30%] md:w-[40%] lg:w-[80%] rounded-sm placeholder:px-2 placeholder:text-[14px] placeholder:text-red-500 py-1 outline-none"
        type="text"
        placeholder="Search for news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* <button>Search</button> */}
      <IoSearchCircle
        size={40}
        className="submit w-[30%] sm:w-[14%] md:w-[16%] lg:w-[20%] rounded-sm hover:scale-105 transition-all py-1 "
        type="button"
        onClick={handleSearchClick}
      />
    </form>
  );
};

export default SearchForm;
