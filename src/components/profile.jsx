import React from "react";
import ProfileCard from "./profilecard";
import Rushil from "../assets/Untitled.png";
import Summary from "./summary";

const profiles = [
  {
    name: "Rushil Dave",
    image: Rushil,
    role: "Senior Mentor",
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
    },
  },
];

const Profile = () => {
  const p = profiles[0];

  return (
    <div>
      <ProfileCard profile={p} />
      <Summary stats={p.stats} />
    </div>
  );
};

export default Profile;
