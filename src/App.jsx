import { useState } from "react";
import "./App.css";
import Skill from "./Skill";
import AddedSkill from "./AddedSkill";

function App() {
  const [selectSkill, setSelectSkill] = useState([
    "HTML",
    "CSS",
    "JS",
    "REACT.JS",
    "C++",
    "C",
    "PYTHON",
    "JAVA",
    "NODE.JS",
    "TAILWIND CSS",
  ]);

  const [mySkill, addMySkill] = useState([]);

  const dropSkillList = () => {
    const d = document.getElementsByClassName("skills")[0];
    setTimeout(() => {
      d.classList.add("dropSkillActive");
    }, 200);
  };

  const closeSkillDiv = () => {
    const d = document.getElementsByClassName("skills")[0];
    d.classList.remove("dropSkillActive");
  };

  const handleClearAll = () => {
    addMySkill([]);
    const pTags = document.querySelectorAll(".active");
    pTags.forEach((ele) => {
      if (ele.classList.contains("active")) {
        ele.classList.remove("active");
      }
    });
  };

  return (
    <>
      <div className="wrapper" onMouseLeave={closeSkillDiv}>
        <div className="searchDiv" onMouseEnter={dropSkillList}>
          {mySkill.map((skl, idx) => (
            <AddedSkill
              data={skl}
              key={skl}
              id={idx}
              setMySkill={addMySkill}
            />
          ))}
          {mySkill.length === 0 && "Add your Skills"}
          {mySkill.length !== 0 && (
            <button id="ClearAll" onClick={handleClearAll}>
              Clear All
            </button>
          )}
        </div>
        <div className="skills">
          {selectSkill.map((v, idx) => (
            <Skill data={v} key={idx} addMySkill={addMySkill} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
