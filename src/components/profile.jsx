import React from "react";
import ProfileCard from "./profilecard";
import Rushil from "../assets/Untitled.png";
import Summary from "./summary";

const profiles = [
  {
    name: "Rushil Dave",
    image: Rushil,
    role: "Senior Mentor",
    bio: "Hi I’m Rushil, I am really excited to get to know you and learn together!.  A little bit about me: I love maths and English. When I'm not nose-deep in my books, I love going to brunches.  In my downtime I go on Maccas run and have cheeseburgers.",
    age: "72",
    stats: {
      minesweeper: {
        hours: "19",
        achievement: true,
      },
      sudoku: {
        hours: "12",
        achievement: true,
      },
      colouring: {
        hours: "10",
        achievement: true,
      },
      connect: {
        hours: "12",
        achievement: true,
      },
    },
  },
  {
    name: "Gertrude Murray",
    image: "",
    role: "Senior Mentor",
    age: "82",
    stats: {
      minesweeper: {
        hours: "23",
        achievement: true,
      },
      sudoku: {
        hours: "6",
        achievement: false,
      },
      colouring: {
        hours: "10",
        achievement: true,
      },
      connect: {
        hours: "12",
        achievement: true,
      },
    },
  },
  {
    name: "Alice Lobo",
    image: "",
    role: "Mentee",
    age: "8",
    stats: {
      minesweeper: {
        hours: "3",
        achievement: false,
      },
      sudoku: {
        hours: "12",
        achievement: true,
      },
      colouring: {
        hours: "7",
        achievement: true,
      },
      connect: {
        hours: "12",
        achievement: true,
      },
    },
  },
];

const Profile = () => {
  const p = profiles[0];

  return <ProfileCard profile={p} />;
};

export default Profile;
