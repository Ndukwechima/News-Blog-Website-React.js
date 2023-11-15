// import React, { useState } from "react";
// import { BiMenu } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";

// const Category = ({ handleCategoryChange, handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleCategoryClick = (category) => {
//     handleCategoryChange(category);
//   };

//   const handleSearchClick = () => {
//     handleSearch(searchQuery);
//   };

//   return (
//     <div className="w-full  bg-gray-400 h-14 flex justify-center items-center fixed top-[5rem] left-0 right-0 z-10 ">
//       <BiMenu className="lg:hidden ml-4 text-[25px]" onClick={toggleMenu} />
//       <div className="w-[90vw] mx-auto flex justify-between">
//         <div
//           className={`w-[40vw] gap-5 pt-10 md:pt-0 flex md:justify-between md:space-x-7 lg:space-x-9 absolute md:static flex-col md:flex-row bg-gray-400 h-screen md:h-0 left-0 ${
//             isOpen ? "md:block" : "hidden"
//           } lg:block`}
//         >
//           <button
//             className="font-bold hover:text-red-700 hover:scale-105 transition-all"
//             onClick={() => handleCategoryClick("General")}
//           >
//             General
//           </button>
//           <button
//             onClick={() => handleCategoryClick("Health")}
//             className="font-bold hover:text-red-700 hover:scale-105 transition-all"
//           >
//             Health
//           </button>
//           <button
//             className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
//             onClick={() => handleCategoryClick("Science")}
//           >
//             Science
//           </button>
//           <button
//             className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
//             onClick={() => handleCategoryClick("Sports")}
//           >
//             Sports
//           </button>
//           <button
//             className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
//             onClick={() => handleCategoryClick("Technology")}
//           >
//             Technology
//           </button>
//           <button
//             className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
//             onClick={() => handleCategoryClick("Entertainment")}
//           >
//             Entertainment
//           </button>
//           <AiOutlineClose
//             className="md:hidden lg:hidden absolute right-3 top-3"
//             onClick={toggleMenu}
//           />
//         </div>
//         <form className="space-x-5 ml-[60px] sm:ml-0 md:ml-0 lg:ml-0">
//           <input
//             className=" w-[10rem] md:w-[16rem] lg:w-[20rem] h-[2rem] rounded-sm placeholder:px-2
//              placeholder:text-[14px] placeholder:text-red-500 outline-none"
//             type="text"
//             placeholder="Search for news..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button
//             className="submit w-[5rem] h-[2rem] rounded-sm hover:scale-105 transition-all bg-red-700  text-white"
//             type="button"
//             onClick={handleSearchClick}
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
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

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  return (
    <div className="w-full  bg-gray-400 h-14 flex justify-center items-center fixed top-[5rem] left-0 right-0 z-10 ">
      <BiMenu className="lg:hidden ml-4 text-[25px]" onClick={toggleMenu} />
      <div className="w-[90vw] mx-auto flex justify-between">
        <div
          className={`w-[40vw] gap-5 pt-10 md:pt-0 flex md:justify-between md:space-x-7 lg:space-x-9 absolute md:static flex-col md:flex-row bg-gray-400 h-screen md:h-0 left-0 ${
            isOpen ? "md:block" : "hidden"
          } lg:block`}
        >
          <button
            className="font-bold hover:text-red-700 hover:scale-105 transition-all"
            onClick={() => handleCategoryClick("General")}
          >
            General
          </button>
          <button
            onClick={() => handleCategoryClick("Health")}
            className="font-bold hover:text-red-700 hover:scale-105 transition-all"
          >
            Health
          </button>
          <button
            className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
            onClick={() => handleCategoryClick("Science")}
          >
            Science
          </button>
          <button
            className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
            onClick={() => handleCategoryClick("Sports")}
          >
            Sports
          </button>
          <button
            className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
            onClick={() => handleCategoryClick("Technology")}
          >
            Technology
          </button>
          <button
            className="font-bold  hover:text-red-700 hover:scale-105 transition-all"
            onClick={() => handleCategoryClick("Entertainment")}
          >
            Entertainment
          </button>
          <AiOutlineClose
            className="md:hidden lg:hidden absolute right-3 top-3"
            onClick={toggleMenu}
          />
        </div>
        <form className="space-x-5 ml-[60px] sm:ml-0 md:ml-0 lg:ml-0">
          <input
            className=" w-[10rem] md:w-[16rem] lg:w-[20rem] h-[2rem] rounded-sm placeholder:px-2
             placeholder:text-[14px] placeholder:text-red-500 outline-none"
            type="text"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="submit w-[5rem] h-[2rem] rounded-sm hover:scale-105 transition-all bg-red-700  text-white"
            type="button"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Category;
