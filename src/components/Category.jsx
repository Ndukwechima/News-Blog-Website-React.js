import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import SearchForm from "./SearchForm";
import { AiOutlineClose } from "react-icons/ai";

const Category = ({ handleCategoryChange, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    handleCategoryChange(category);
  };

  return (
    <section className="w-[100%] bg-gray-400 h-14 flex justify-center items-center fixed top-[5rem] left-0 right-0 z-10">
      <BiMenu className="lg:hidden ml-4 text-[25px]" onClick={toggleMenu} />
      <div className="w-[96%]  flex justify-between">
        <div
          className={`w-[60%] gap-5 pt-10 md:pt-0 flex md:justify-between md:space-x-7 lg:space-x-9 absolute md:static flex-col md:flex-row bg-gray-400 h-screen md:h-0 left-0 ${
            isOpen ? "md:block" : "hidden"
          } lg:block`}
        >
          {[
            "General",
            "Health",
            "Science",
            "Sports",
            "Technology",
            "Entertainment",
          ].map((category) => (
            <button
              key={category}
              className="font-bold hover:text-red-700 hover:scale-105 transition-all"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
          <AiOutlineClose
            className="md:hidden lg:hidden absolute right-3 top-3"
            onClick={toggleMenu}
          />
        </div>

        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearchClick={() => handleSearch(searchQuery)}
        />
      </div>
    </section>
  );
};

export default Category;
