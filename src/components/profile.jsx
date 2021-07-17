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
    stats: [],
  },
  {
    name: "Gertrude Murray",
    image: "",
    role: "Senior Mentor",
    age: "82",
    stats: [],
  },
  {
    name: "Alice Lobo",
    image: "",
    role: "Mentee",
    age: "8",
    stats: [],
  },
];

const Profile = () => {
  return (
    <div>
      {profiles.length &&
        profiles.map((p) => {
          return (
            <>
              <ProfileCard profile={p} />
              <Summary stats={p.stats} />
            </>
          );
        })}
    </div>
  );
};

export default Profile;
