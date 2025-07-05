import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Card() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [text] = useTypewriter({
    words: [
      "Welcome to the last ride",
      "Ride into the unknown",
      "Embrace the silence",
      "Your final journey begins...",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/f2/a5/27/f2a52757950a57f5d8665724789a4327.jpg')`,
        }}
      ></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>

      {/* Content */}
      <div className="relative mt-20 z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 py-12">
        <div className="flex flex-col items-center max-w-3xl">
          <div className="inline-flex items-center bg-white/20 dark:bg-white/10 rounded-full px-4 py-1 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              Welcome to your own community
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="text-white">The</span>{" "}
            <span className="text-primary text-white/70">Last Ride</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            {isClient && (
              <>
                {text}
                <Cursor cursorStyle="|" />
              </>
            )}
          </h2>

          <p className="text-sm md:text-lg text-black/90 dark:text-gray-300 leading-relaxed px-2">
            <strong className="text-primary font-semibold">The Last Ride</strong> is a friendly gaming community where friendship comes before everything. Here, we don’t just play — we connect, laugh, and build unforgettable memories together. Whether you're a hardcore gamer or just here to chill, you’ll always find someone who’s got your back. One ride. One bond. One family.
          </p>
        </div>

        {/* ✅ Your original stats block exactly as provided */}
        <div className="mt-12 grid grid-cols-3 gap-8 px-4 py-6 bg-white/50 dark:bg-zinc-900/50 rounded-2xl backdrop-blur-sm shadow-lg">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary dark:text-white">100+</span>
            <span className="text-sm text-gray-600 dark:text-gray-200">Stuff</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary dark:text-white">4K+</span>
            <span className="text-sm text-gray-600 dark:text-gray-200">Mambers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary dark:text-white">5.0</span>
            <span className="text-sm text-gray-600 dark:text-gray-200">Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
