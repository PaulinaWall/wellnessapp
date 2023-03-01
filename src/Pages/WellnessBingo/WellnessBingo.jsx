import React, { useState } from "react";
import "./WellnessBingo.css";

export const WellnessBingo = () => {
  const bingoWords = [
    "Cook a healthy meal",
    "Do a workout",
    "Go for a walk",
    "meditate",
    "Go to the seaside",
    "Do some Yoga",
    "Take a break and listen to some music",
    "Use the gym at the office",
    "Treat yourself with something nice",
    "Call a friend you haven’t talked to in a long time",
    "Go for a bicycle ride",
    "Exercise with a friend",
    "Do one of your favourite hobbies",
    "Cheer on your favourite team",
    "Give a positive feedback to a colleague",
    "Read a chapter in your book",
  ];

  let shuffledWords = [
    {name: "meditate", checked: false},
    {name: "Give a positive feedback to a colleague", checked: false},
    {name: "Take a break and listen to some music", checked: false},
    {name: "Cook a healthy meal", checked: false},
    {name: "Read a chapter in your book", checked: false},
    {name: "Do a workout", checked: false},
    {name: "Use the gym at the office", checked: false},
    {name: "Treat yourself with something nice", checked: false},
    {name: "Do some Yoga", checked: false},
    {name: "Go to the seaside", checked: false},
    {name: "Call a friend you haven’t talked to in a long time", checked: false},
    {name: "Exercise with a friend", checked: false},
    {name: "Cheer on your favourite team", checked: false},
    {name: "Go for a bicycle ride", checked: false},
    {name: "Do one of your favourite hobbies", checked: false},
    {name: "Go for a walk", checked: false},
  ];
  const [words, setWords] = useState(shuffledWords);

  const handleCheck = (word) => {
   let current = words.find((w) => w.name === word);
    current.checked = !current.checked;
   setWords([...words])
  };

  return (
    <div className="container">
     <div className="bingo-container">
        <div className="bingo-board">
        {words.map((word) => (
          word.checked
          ? <div key={word.name} className="bingo-board-item-success">
              <span className="bingo-name-title">{word.name}</span>
            </div>
          : <div key={word.name} className="bingo-board-item"></div>
          
        ))}
        </div>
        <div className="bingo-checklist">
          {bingoWords.map((word) => (
            <div key={word} className="bingo-checklist-item">
              <input type="checkbox" onClick={() => handleCheck(word)} />
              <label>{word}</label>
            </div>
          ))}
        </div>
     </div>
    </div>

);
};



