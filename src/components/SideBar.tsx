import { motion } from "framer-motion";
import { Close } from "./Icons/Close";

interface SideBarProps {
  onChangeOpenState(): void;
}

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -397,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export function SideBar({ onChangeOpenState }: SideBarProps) {
  return (
    <motion.nav
      initial="hidden"
      animate={"visible"}
      variants={variants}
      exit={"hidden"}
      className="flex p-4 gap-2 z-30 w-[70%] h-screen flex-col absolute top-0 left-0 bg-white "
    >
      <Close onClick={onChangeOpenState} />
      <a>Collections</a>
      <a>Men</a>
      <a>Women</a>
      <a>About</a>
      <a>Contact</a>
    </motion.nav>
  );
}
