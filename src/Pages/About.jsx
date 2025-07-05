import React from 'react';

function About() {
  return (
    <div className="mt-20 mb-10 flex items-center justify-center min-h-screen bg-white px-4">
      <div className="bg-gray-100 p-6 sm:p-8 md:p-10 hover:scale-[1.01] hover:shadow-xl hover:shadow-gray-300 w-full max-w-xl rounded-lg transition-all duration-200">
        
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            className="rounded-full h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 object-cover shadow-md hover:scale-105 hover:shadow-lg hover:shadow-gray-200 transition"
            src="https://i.pinimg.com/736x/73/92/d0/7392d070a1da1f1cd66e03f9256ef9b2.jpg"
            alt="Ronk"
          />
        </div>

        {/* Text Content */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 text-center">
          <p className="text-lg sm:text-xl font-semibold text-indigo-600">
           Welcome to <span className="font-bold text-indigo-600">The Last Ride</span> — Your Ultimate Destination for Gamers, Friends & Unforgettable Moments!


          </p>
          <p>
            Hi, I'm Rounk, the proud owner of The Last Ride — not just a server, but a family. This community is built on trust, respect, and shared passion for gaming and friendship. From casual chats to competitive matches, every member here matters. 
          </p>
          <p>
            We welcome everyone with open arms, making sure no one ever feels left out. It’s more than just games — it’s about bonding, learning, and growing together. Whether you're a pro or a beginner, you’ll always find support. The Last Ride isn’t your final stop — it’s where your real journey begins. One ride. One family. One legacy!
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2">
          <div className="font-bold text-lg sm:text-xl text-black text-center sm:text-left">
            Owned By:{' '}
            <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 animate-pulse">
              Ronk
            </span>
          </div>
          <a
            href="https://discord.com/users/959888578643628063"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 sm:ml-2 mt-2 sm:mt-0"
          >
            <img
              src="https://img.icons8.com/?size=96&id=30998&format=png"
              alt="Instagram"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
