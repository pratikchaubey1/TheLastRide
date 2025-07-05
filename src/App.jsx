import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Trusted from "./Pages/Trusted";
import EventPage from "./Pages/EventPage";
import { useState } from "react";


function App() {
  const[trusted,setrusted]=useState([{
    img: "https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg",
    name: "Gerry",
    role: "Co-owner",
    age: 18,
    discord: "https://discord.com/users/1218350170601816105",
    Insta: "https://www.instagram.com/sneh_3115/",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1381941226529361971/1390997388180721697/image.png?ex=686a4ac4&is=6868f944&hm=aeab215a7bf04f040181a6286eaf5f3050ada916fa5c09c47f9d815f63708fb0&",
    name: "Soul",
    role: "Co-Owner",
    age: 20,
    discord: "https://discord.com/users/1266933570921037886",
    Insta: "https://www.instagram.com/mayankbansal_13/",
  },
  {
    img: "https://i.pinimg.com/736x/c5/e4/09/c5e4096de2b6d86d4dda32e9d7db0ebd.jpg",
    name: "SBP",
    role: "Top-Admin",
    age: 18,
    discord: "https://discord.com/users/1141685046017785897",
    Insta: "https://www.instagram.com/sbp_xd/",
  },
  {
    img: "https://i.pinimg.com/736x/25/13/86/251386b48c624146d4d5227604d4af48.jpg",
    name: "Prince",
    role: "Top-Admin",
    age: 20,
    discord: "https://discord.com/users/1352942952686682175",
    Insta: "https://www.instagram.com/prince_here8388/",
  },
   {
    img: "https://i.pinimg.com/736x/72/e7/e1/72e7e1083cbfc9b12f93839b10422559.jpg",
    name: "Arjun",
    role: "Admin",
    age: 20,
    discord: "https://discord.com/users/972492182223196201",
    Insta: "https://www.instagram.com/prince_here8388/",
  },{
   img: "https://i.pinimg.com/736x/7f/7f/dd/7f7fdd30d339282a52f89e10652576fb.jpg",
    name: "Prab",
    role: "Admin",
    age: 19,
    discord: "https://discord.com/users/881346647215472730",
    Insta: "https://www.instagram.com/_prabonly/"
  },
    {
    img: "https://i.pinimg.com/736x/c6/47/08/c64708fb2de690ac1036426bd9216559.jpg",
    name: "Harry",
    role: "Gaming-Head",
    age: 22,
    discord: "https://discord.com/users/1299283518425399309",
    Insta: "https://www.instagram.com/leywin.vla?igsh=dDJ5cDQyNWo0OWtr",
  },
  {
    img: "https://i.pinimg.com/736x/f5/3b/65/f53b65e019a4a257fba223ea84887640.jpg",
    name: "Wizz",
    role: "Gaming-Manager",
    age: 21,
    discord: "https://discord.com/users/1099762220222656713",
    Insta: "https://www.instagram.com/apelawizz/",
  },
  {
    img: "https://i.pinimg.com/736x/7a/f9/df/7af9dfd78adce84a1085b32e82580c56.jpg",
    name: "Nitin",
    role: "Srv-mod",
    age: 15,
    discord: "https://discord.com/users/1263135354689556562",
    Insta: "https://www.instagram.com/_.ntnn/",
  },
  {
    img: "https://i.pinimg.com/736x/87/9e/3e/879e3e30cd7557092e44da23270ab2da.jpg",
    name: "Janak",
    role: "Srv-Owner-LP",
    age: 23,
    discord: "https://discord.com/users/869532480741449760",
    Insta: "https://www.instagram.com/__.janaakkk/",
  },
  {
    img: "https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg",
    name: "Badmosh",
    role: "Srv-Artist",
    age: 19,
    discord: "https://discord.com/users/1242118251304189993",
    Insta: "https://www.instagram.com/mayurvocals/",
  },
  {
    img: "https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg",
    name: "Teddy",
    role: "Srv-haulaa",
    age: 20,
    discord: "https://discord.com/users/508692960049627166",
    Insta: "",
  },

])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/Trusted", element: <Trusted trust={trusted} ></Trusted> },
        {
          path: "/event",
          element: <EventPage></EventPage>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
