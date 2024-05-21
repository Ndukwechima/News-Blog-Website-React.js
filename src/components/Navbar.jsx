function Navbar() {
  return (
    <nav className="  hidden sm:hidden md:hidden lg:flex justify-between items-center pr-12">
      <ul className="flex gap-8 items-center px-6 text-white text-[16px] ">
        <li className="hover:text-red-500">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-red-500">
          <a href="#">About Us</a>
        </li>
        <li className="hover:text-red-500">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <button className="hover:bg-red-500 bg-red-700 py-[4px] px-6 rounded-sm text-white text-[16px] font-bold">
        <a href="#">Login</a>
      </button>
    </nav>
  );
}

export default Navbar;
