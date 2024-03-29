"use client";
import { useState, useEffect, useContext } from "react";
import { CursorContext } from "../providers/CursorContext";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  const { cursor } = useContext(CursorContext);

  const updatePosition = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseleave", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, [cursor, position.clientX, position.clientY]);

  return position;
};

export default useMousePosition;
