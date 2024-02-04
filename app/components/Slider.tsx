import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SliderProps {
  items: any[];
}

export const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
      };
    },
    animate: {
      x: "0%",
      transition: {
        x: { duration: 1 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? "-100%" : "100%",
        transition: {
          x: { delay: 1, duration: 0.1 },
        },
      };
    },
  };

  const dotsVariants = {
    initial: {
      width: 10,
    },
    animate: {
      width: 30,
      transition: { stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === items.length ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setDirection(-1);

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="carousel flex flex-col gap-5">
      <div className="relative   h-[40vh] w-full  overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            className="w-full relative h-full object-cover "
            custom={direction}
            key={currentIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            <Image
              src={items[currentIndex].img}
              alt="image"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className=" flex text-2xl justify-between items-center text-red-500 ">
        <motion.button onClick={handlePrevious}>PREV</motion.button>
        <div className="carousel-indicator  flex  gap-[10px]">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={` cursor-pointer w-[10px] h-[5px]  ${
                currentIndex === index ? "bg-red-500" : "bg-neutral-500"
              }`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
        <motion.button onClick={handleNext}>NEXT</motion.button>
      </div>
    </div>
  );
};
