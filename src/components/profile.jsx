import React from "react";
import ProfileCard from "./profilecard";
import Rushil from "../assets/Untitled.png";

const profiles = [
  {
    name: "Rushil Dave",
    image: Rushil,
    role: "Senior Mentor",
    age: "72",
  },
];

const Profile = () => {
  return (
    <div>
      {profiles.length &&
        profiles.map((p) => <ProfileCard profile={p} />)}
    </div>
  );
};

export default Profile;
