import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoEyeSharp } from "react-icons/io5";

function Home() {
  const [isClient, setIsClient] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    setIsClient(true);
    fetch("https://api.countapi.xyz/hit/thelastride/home")
      .then((res) => res.json())
      .then((data) => {
        setViews(data.value);
      });
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

 const serverDetails = [
  {
    title: "Custom Roles",
    desc: "Unlock roles, colors, and badges based on your activity and contributions.",
    img: "https://images.mini-ielts.com/images/11/29/the-concept-of-role-theory.jpg"
  },
  {
    title: "Active Moderation",
    desc: "Team of moderators available 24/7 to maintain community standards.",
    img: "https://static.wixstatic.com/media/1d3d5b_e38e7018bee144fe84c1398512984234~mv2.png/v1/fill/w_980,h_767,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/1d3d5b_e38e7018bee144fe84c1398512984234~mv2.png"
  },
  {
    title: "Gaming Lounge",
    desc: "Join voice channels, stream games, and hang out with friends anytime.",
    img: "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2021/07/01091502/abstract_digital-gamepad-sl-scaled-e1625130922273.jpg"
  },
  {
    title: "Memes & Fun",
    desc: "Relax with daily memes, games, and chill interactions.",
    img: "https://file.forms.app/sitefile/35+Funny-market-research-memes-to-make-you-roll-with-laughter-0.jpeg"
  },
  {
    title: "Announcements",
    desc: "Stay up to date with official news, updates, and events.",
    img: "https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/8-creative-announcement-emails.png"
  },
  {
    title: "Custom Bots",
    desc: "Smart bots built to enhance server interaction and moderation.",
    img: "https://proedu.com/cdn/shop/files/proedu_a_tiny_Robot_that_is_your_AI_assistant_all_white_friendl_4ff4ede7-c00e-4244-b5e2-0824c7d0327c.jpg?v=1700682382&width=1000"
  },
  {
    title: "Voice Chats",
    desc: "Clear and lag-free voice channels for all kinds of conversations.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAKTlDB1uKprL208Afw8doWxDWOd0kCLSJw&s"
  },
  {
    title: "Event Nights",
    desc: "Movie nights, tournaments, giveaways, and more!",
    img: "https://i.pinimg.com/736x/40/e4/fa/40e4faa86c26347190d37f84753cf3aa.jpg"
  },
  {
    title: "Support System",
    desc: "Raise tickets for help, feedback, or suggestions.",
    img: "https://i.pinimg.com/736x/8c/11/f0/8c11f02ab0954527b502dbf959f83e44.jpg"
  },
  {
    title: "Ranking System",
    desc: "Earn XP and level up with server activity and engagement.",
    img: "https://i.pinimg.com/736x/0b/11/de/0b11de48ce0b679b12010d30a3b5a2cc.jpg"
  }
];


  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/f2/a5/27/f2a52757950a57f5d8665724789a4327.jpg')`,
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-xs bg-black/40"></div>

     
      <a
        href="https://discord.gg/thelastride"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4 z-50"
      >
        <img
          src="https://img.icons8.com/?size=96&id=30998&format=png"
          alt="Server"
          className="h-11 w-11 hover:scale-110 md:hover:scale-105 transition"
        />
      </a>

      
      <div className="absolute top-4 right-4 z-50 bg-white/30 dark:bg-zinc-800/40 px-4 py-2 rounded-full backdrop-blur-md shadow-md flex items-center gap-2">
        <IoEyeSharp className="text-white text-lg" />
        <p className="text-sm font-medium text-white">
          {views.toLocaleString()}
        </p>
      </div>

      
      <div className="relative mt-20 z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 py-12">
        <div className="flex flex-col items-center max-w-3xl">
          <div className="inline-flex items-center bg-white/20 dark:bg-white/10 rounded-full px-4 py-1 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              Welcome to your own community
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="text-white">The</span>{" "}
            <span className="text-white/70 animate-pulse">Last Ride</span>
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
            <strong className="text-primary font-semibold">The Last Ride</strong> is a
            friendly gaming community where friendship comes before everything. Here,
            we don’t just play — we connect, laugh, and build unforgettable memories
            together. Whether you're a hardcore gamer or just here to chill, you’ll
            always find someone who’s got your back. One ride. One bond. One family.
          </p>
        </div>

        
        <div className="mt-12 grid grid-cols-3 gap-8 hover:scale-[1.01] px-4 py-6 bg-white/50 dark:bg-zinc-900/50 rounded-2xl backdrop-blur-sm shadow-lg">
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

    
    <div className="bg-white py-16 px-6 z-10 relative">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-12">
    About Us
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {serverDetails.map((item, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-md md:hover:scale-75 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-in-out p-4 flex flex-col justify-between items-center aspect-square max-w-xs mx-auto"
      >
        <img
          src={item.img}
          alt={item.title}
          className="h-24 w-24 hover:scale-200 md:hover:scale-150 mb-3 object-contain"
        />
        <h3 className="text-md font-bold text-center text-black mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-700 text-center">{item.desc}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Home;
