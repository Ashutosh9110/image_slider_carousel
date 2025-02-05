import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/city1.png";
import city2 from "../assets/city2.png";
import city3 from "../assets/city3.png";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import SpaceCity2 from "../assets/SpaceCity2.jpeg";
import SpaceCity3 from "../assets/SpaceCity3.jpeg";
import SpaceCity4 from "../assets/SpaceCity4.jpeg";
import SpaceCity5 from "../assets/SpaceCity5.jpeg";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % positions.length
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + positions.length) % positions.length
      );
      return updatedIndexes;
    });
  };

  const images = [
    city1,
    city2,
    city3,
    planet1,
    planet2,
    SpaceCity2,
    SpaceCity3,
    SpaceCity4,
    SpaceCity5,
  ];

  const positions = [
    "center",
    "left1",
    "left2",
    "left3",
    "left4",
    "right4",
    "right3",
    "right2",
    "right1",
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 7 },
    left1: { x: "-30%", scale: 0.7, zIndex: 5 },
    left2: { x: "-60%", scale: 0.5, zIndex: 4 },
    left3: { x: "-80%", scale: 0.3, zIndex: 3 },
    left4: { x: "-95%", scale: 0.2, zIndex: 2 },
    right4: { x: "95%", scale: 0.2, zIndex: 1 },
    right3: { x: "80%", scale: 0.3, zIndex: 3 },
    right2: { x: "60%", scale: 0.5, zIndex: 4 },
    right1: { x: "30%", scale: 0.7, zIndex: 5 },
  };

  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen w-screen overflow-hidden relative">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`slide-${index}`}
          className="rounded-[12px] w-[200px] h-[300px] object-cover"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3 z-[20]">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 cursor-pointer"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;