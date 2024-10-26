"use client"; // Ensure this is at the top if necessary

import Image from "next/image";
import React, { useRef } from "react";
import Music from "../../public/assets/music.svg";
import Button from "./Button";


// Define the props type for Card component
interface CardProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void; // Function to set visibility
}

const Card: React.FC<CardProps> = ({ isVisible, setIsVisible }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsVisible(false); // Hide the card when music starts playing
  };

  const dontPlay = () => {
    setIsVisible(false); // Hide the card when "No" button is clicked
  };

  return (
    <>
      {isVisible && ( // Conditionally render the card based on isVisible prop
        <div className="bg-white/10 h-fit px-6 py-14 flex flex-col gap-5 shadow-button backdrop-blur-md rounded-2xl">
          <Image src={Music} alt="music" width={125} height={125} />
          <div className="text-2xl font-semibold ">
            Do you want to play music in the background?
          </div>
          <div className="flex flex-col gap-2">
            <Button text="Yes" color="bg-green-400" onClick={playAudio} />
            <Button text="No" onClick={dontPlay} />
          </div>
        </div>
      )}

      <audio ref={audioRef} src={"./assets/music.mp3"} />
    </>
  );
};

export default Card;
