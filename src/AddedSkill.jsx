import React from "react";
import "./App.css";

const AddedSkill = ({ data, setMySkill}) => {
  const handleSingleClear = (e) => {
    setMySkill((prev) => [
      ...prev.filter((v) => v !== e.target.previousElementSibling.innerText),
    ]);
    let newData = e.target.id;
    newData = newData.substring(4);
    const removeTag = document.getElementById(newData);
    if (removeTag.classList.contains("active")) {
      removeTag.classList.remove("active");
    }
  };

  return (
    <div className="skill-container" id={`skill-${data}`}>
      <p className="searchSkill">{data}</p>
      <button id={`btn-${data}`} onClick={handleSingleClear}>
        X
      </button>
    </div>
  );
};

export default AddedSkill;
