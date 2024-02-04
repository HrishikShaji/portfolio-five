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
					x: { duration: 1 },
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
		<div className="carousel flex flex-col justify-between">
			<div className="relative   h-[30vh] w-full  overflow-hidden">
				<AnimatePresence initial={false} custom={direction} mode="popLayout">
					<motion.div
						className="w-full relative  h-full flex flex-col justify-between items-center p-2 rounded-3xl gap-2 object-cover "
						custom={direction}
						key={currentIndex}
						initial="initial"
						animate="animate"
						exit="exit"
						variants={variants}
					>
						<h2 className="text-center text-xl text-semibold">
							{items[currentIndex].desc}
						</h2>
					</motion.div>
				</AnimatePresence>
			</div>
			<div className=" flex text-2xl justify-between items-center text-red-500 ">
				<motion.button onClick={handlePrevious}>
					<h1 className="text-black text-6xl">PREV</h1>
				</motion.button>
				<Image
					src={items[currentIndex].img}
					alt="image"
					height={1000}
					width={1000}
					className="h-20 w-20  rounded-md object-cover"
				/>
				<motion.button onClick={handleNext}>
					<h1 className="text-black text-6xl">NEXT</h1>
				</motion.button>
			</div>
		</div>
	);
};
