"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import Cloud_s from "../../public/assets/cloud-s.svg";
import Cloud_dark from "../../public/assets/Clouds.png";

import Profile from "../../public/assets/profile.jpg";

import TypewriterComponent from "typewriter-effect";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeDiv, setActiveDiv] = useState(1); // Tracks the currently active div
  const [isCardVisible, setIsCardVisible] = useState(true);
  const fullText =
    "Happy Birthday, Narmuuu! 🎉 Wishing you a day filled with laughter, love, and all the...";

  // Timing for each div (in milliseconds)
  const divTimings = [5000, 4000, 9000, 4000, 4000, 6000, 5000, 3000, 8000];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isCardVisible && activeDiv < divTimings.length) {
      timeout = setTimeout(() => {
        setActiveDiv((prevActiveDiv) => prevActiveDiv + 1);
      }, divTimings[activeDiv - 1]);
    }

    // Cleanup the timeout on component unmount or when Card is shown
    return () => {
      clearTimeout(timeout);
    };
  }, [isCardVisible, activeDiv]);
  // Add activeDiv as a dependency

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
    className={`poppins w-screen p-4 h-screen flex flex-col items-center justify-center relative   text-white ${
      isDarkTheme ? 'bg-background bg-pattern bg-no-repeat bg-cover' : 'bg-patternd bg-no-repeat bg-cover'
    }`} 
    >
      {/* Cloud image */}
      {/* Cloud image */}
      <div className="fixed top-7 -right-10 lg:right-10">
        <Image
          src={isDarkTheme ? Cloud_s : Cloud_dark }
          alt="Clouds"
          height={250}
          width={250}
          className=""
        />
      </div>
      <button
        onClick={toggleTheme}
        className="absolute z-[1] bottom-10 right-10 bg-white/10 text-white border border-white p-2 rounded-md shadow-lg transition cursor-pointer"
      >
        Change theme
      </button>
      {/* Pass down isCardVisible and setIsCardVisible to control Card visibility */}
      <Card isVisible={isCardVisible} setIsVisible={setIsCardVisible} />

      {/* Conditionally render divs only when Card is hidden */}
      {!isCardVisible && (
        <>
          {activeDiv === 1 && (
            <div className="one">
              <div className="flex flex-col gap-2">
                <motion.span
                  className="text-5xl font-semibold"
                  initial={{ opacity: 0, y: 20 }} // Initial state
                  animate={{ opacity: 1, y: 0 }} // End state
                  transition={{ duration: 2 }} // Transition duration
                >
                  Hi, Narmu...
                </motion.span>
                <motion.span
                  className="text-xl"
                  initial={{ opacity: 0, y: 20 }} // Initial state
                  animate={{ opacity: 1, y: 0 }} // End state
                  transition={{ duration: 2, delay: 1.5 }} // Transition with delay
                >
                  I like your name, btw
                </motion.span>
              </div>
            </div>
          )}
          {activeDiv === 2 && (
            <div className="two flex flex-col justify-center">
              <span className="text-xl">it's Your</span>
              <motion.span
                className="text-5xl font-semibold"
                initial={{ scale: 0.5, opacity: 0 }} // Start from a smaller scale with zero opacity
                animate={{ scale: 1, opacity: 1 }} // Animate to full scale with full opacity
                transition={{
                  duration: 1.5, // Duration of the animation
                  type: "spring", // Adds a spring effect
                  stiffness: 200,
                  delay: 1.25, // Controls the "bounce" effect
                }}>
                Birthday
              </motion.span>
            </div>
          )}
          {activeDiv === 3 && (
            <div className="three flex flex-col gap-3 justify-end text-xl">
              <div className="three flex flex-col gap-3 justify-end text-lg">
                <div className="text-box  border border-white bg-white/10 p-6 rounded-lg w-[400px] h-[250px] ">
                  <TypewriterComponent
                    options={{
                      strings: [fullText],
                      autoStart: true,
                      delay: 50, // Adjust typing speed if needed
                    }}
                  />
                </div>
              </div>

              <div className="border border-white bg-blue-400 py-2 px-4 w-fit rounded-full">
                Send
              </div>
            </div>
          )}
          {activeDiv === 4 && (
            <div className="four text-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Start with opacity at 0 and a small downward offset
                animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
                transition={{ duration: 2, ease: "easeOut" }} // Adjust duration and easing as needed
              >
                That's what I was going to do.
              </motion.div>
            </div>
          )}
          {activeDiv === 5 && (
            <div className="five text-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Start with opacity at 0 and slight offset below
                animate={{ opacity: 1, y: 0 }} // Fade in and slide up to position
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} // Adjust duration and add delay if needed
              >
                But then I stopped.
              </motion.div>
            </div>
          )}
          {activeDiv === 6 && (
            <div className="text-2xl  items-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} // Duration for the text to fade in
                className="mr-1">
                I realized, I wanted to do something&nbsp;
              </motion.span>

              <motion.span
                className="px-2 rounded-md font-semibold"
                initial={{
                  backgroundColor: "#f0f0f0",
                  color: "#000",
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 3,
                  delay: 2,
                }}>
                Special
              </motion.span>
            </div>
          )}
          {activeDiv === 7 && (
            <div className="text-2xl flex flex-col gap-2">
              <span>Because,</span>

              <motion.span className="text-5xl font-semibold flex gap-1">
                You are&nbsp;
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 8,
                    duration: 0.6,
                    delay: 2,
                  }}>
                  Special
                </motion.span>
              </motion.span>
            </div>
          )}
          {activeDiv === 8 && (
            <div className="flex justify-center items-center h-screen">
              <div className="eight text-[400px] flex">
                <motion.span
                  initial={{ scale: 0, opacity: 0 }} // Starting state
                  animate={{ scale: 1, opacity: 1 }} // End state
                  transition={{ duration: 2.5, ease: "easeInOut" }} // Transition properties
                >
                  S
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }} // Starting state
                  animate={{ scale: 1, opacity: 1 }} // End state
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }} // Transition with delay
                >
                  O
                </motion.span>
              </div>
            </div>
          )}
          {activeDiv === 9 && (
            <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">
              {/* Main content */}
              <div className="nine flex flex-col items-center">
                <motion.div
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}>
                  <Image
                    src={Profile}
                    alt="profile"
                    className="rounded-full"
                    width={150}
                    height={150}
                  />
                </motion.div>

                <div className="wish mt-4 text-center text-4xl">
                  <motion.h3
                    className="wish-hbd text-3xl font-bold text-red-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}>
                    Happy Birthday!
                  </motion.h3>
                  <motion.h5
                    id="wishText"
                    className="mt-2 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeInOut" }}>
                    I hope all your birthday wishes come true! Wishing nothing
                    but the absolute best for my best friend.
                  </motion.h5>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
