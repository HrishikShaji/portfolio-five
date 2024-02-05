import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCursorHandlers } from "../hooks/useCursorHandlers";

interface SliderProps {
	items: any[];
}

export const Slider: React.FC<SliderProps> = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const { buttonMouseEnter, buttonMouseLeave, logoMouseEnter, logoMouseLeave } =
		useCursorHandlers();

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
						<h2
							className="text-center text-xl text-semibold"
							onMouseEnter={() =>
								logoMouseEnter({ height: 200, width: 200, radius: "50%" })
							}
							onMouseLeave={logoMouseLeave}
						>
							{items[currentIndex].desc}
						</h2>
					</motion.div>
				</AnimatePresence>
			</div>
			<div className=" flex text-2xl justify-between items-center text-red-500 ">
				<motion.button
					id="prev-button"
					onMouseEnter={() => buttonMouseEnter({ id: "prev-button" })}
					onMouseLeave={buttonMouseLeave}
					onClick={handlePrevious}
					className="focus:outline-none p-1"
				>
					<h1 className="text-black text-6xl focus:outline-none">PREV</h1>
				</motion.button>
				<Image
					id="testimonial-image"
					onMouseEnter={() => buttonMouseEnter({ id: "testimonial-image" })}
					onMouseLeave={buttonMouseLeave}
					src={items[currentIndex].img}
					alt="image"
					height={1000}
					width={1000}
					className="h-20 w-20   object-cover"
				/>
				<motion.button
					id="next-button"
					onMouseEnter={() => buttonMouseEnter({ id: "next-button" })}
					onMouseLeave={buttonMouseLeave}
					onClick={handleNext}
					className="focus:outline-none p-1 "
				>
					<h1 className="text-black text-6xl focus:outline-none">NEXT</h1>
				</motion.button>
			</div>
		</div>
	);
};
