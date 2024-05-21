import flyerImage from "/assets/safe-delivery1.png";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-[100%] fixed flex justify-between top-0 left-0 right-0 z-10 h-[5rem] text-[25px] bg-black items-center">
      <div className="w-[20%] flex justify-center items-center shadow-md ml-4">
        <AnimatePresence>
          <motion.img
            src={flyerImage}
            alt="product flyer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, duration: 2 },
              opacity: { delay: 10 },
              repeat: Infinity,
            }}
            className="w-[90%] sm:w-[70%] md:w-[70%] lg:w-[60%] rounded-sm"
          />
        </AnimatePresence>
      </div>
      <div className="w-[44%] sm:w-[30%] md:w-[40%] lg:w-[30%] ml-2">
        <h3 className=" text-white text-[12px] ms:text-[22px] md:text-[20px] lg:text-[20px]">
          <h2 className="text-red-700">WELCOME TO THE WORLD NEWS</h2>
        </h3>
      </div>
      <div className="w-[40%] ">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
