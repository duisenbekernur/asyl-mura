import React from "react";

const team = [
  {
    name: "Duisenbek Ernur",
    job: "Frontend developer",
    imgUrl: require("../img/contacts/ernur.png"),
  },
  {
    name: "Mazhit Yedige",
    job: "Backend developer",
    imgUrl: require("../img/contacts/yedige.png"),
  },
];

const Team = () => {
  return (
    <div className="container">
      <div className="container__header">
        <h1>Our team</h1>
      </div>
      <div className="team__contacts">
        {team.map((person, index) => (
          <div key={`${person}-${index}`} className="person">
            <img src={person.imgUrl} alt="person" />
            <div className="triangle"></div>
            <div className="person__content">
              <h3>{person.name}</h3>
              <p>{person.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
