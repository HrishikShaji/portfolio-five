import { useContext } from "react";
import { CursorContext } from "../providers/CursorContext";

export const useCursorHandlers = () => {
  const { setCursor } = useContext(CursorContext);

  const buttonMouseEnter = ({ id }: { id: string }) => {
    const hoverElement = document.getElementById(id);
    const rect = hoverElement?.getBoundingClientRect();

    if (rect && hoverElement) {
      setCursor((prev) => ({
        ...prev,
        active: true,
        left: rect.left,
        top: rect.top,
        height: hoverElement.clientHeight,
        width: hoverElement.clientWidth,
        radius: "0%",
      }));
    }
  };
  const buttonMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      left: 0,
      top: 0,
      height: 10,
      width: 10,
      radius: "50%",
    }));
  };

  const descMouseEnter = ({ img }: { img: string }) => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      height: 200,
      width: 200,
      img: img,
    }));
  };
  const descMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      height: 20,
      width: 20,
      img: "",
    }));
  };
  const logoMouseEnter = ({
    height,
    width,
    radius,
  }: {
    height: number;
    width: number;
    radius: string;
  }) => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      height: height,
      width: width,
      radius: radius,
    }));
  };
  const logoMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      height: 20,
      width: 20,
      radius: "50%",
    }));
  };
  return {
    buttonMouseEnter,
    buttonMouseLeave,
    descMouseEnter,
    descMouseLeave,
    logoMouseLeave,
    logoMouseEnter,
  };
};
