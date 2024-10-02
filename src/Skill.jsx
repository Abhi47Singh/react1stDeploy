import React, { useState } from "react";
import "./App.css";

const Skill = ({data, addMySkill }) => {
  const handleClick = (e) => {
    const ele = document.getElementById(`${e.target.id}`);
    if (e.target.classList.contains("active")) {
      addMySkill((prev) => [...prev.filter((v) => v !== ele.innerText)]);
      ele.classList.toggle("active");
    } else {
      addMySkill((prev) => [...prev, ele.innerText]);
      ele.classList.toggle("active");
    }
  };
  return (
    <>
      <p className="selectSkill" id={data} onClick={handleClick}>
        {data}
      </p>
    </>
  );
};

export default Skill;
