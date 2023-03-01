import React, { useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

import { PageHeader } from '../../Common/PageHeader/PageHeader';
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
    {name: "meditate", checked: true},
    {name: "Give a positive feedback to a colleague", checked: false},
    {name: "Take a break and listen to some music", checked: true},
    {name: "Cook a healthy meal", checked: false},
    {name: "Read a chapter in your book", checked: true},
    {name: "Do a workout", checked: false},
    {name: "Use the gym at the office", checked: false},
    {name: "Treat yourself with something nice", checked: true},
    {name: "Do some Yoga", checked: false},
    {name: "Go to the seaside", checked: false},
    {name: "Call a friend you haven’t talked to in a long time", checked: false},
    {name: "Exercise with a friend", checked: false},
    {name: "Cheer on your favourite team", checked: true},
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

  const doSomeYoga = words.find((word) => word.name === 'Do some Yoga');
  const isBingo = doSomeYoga.checked === true;
  var colors = ['#40C887', '#97a7ff', '#ffac9c'];

  const confettiProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 250,
    width: 1600,
    colors,
  };

  return (
    <div className="page-container--fade-in">
      <PageHeader
        heading="Wellness bingo"
        description="Complete the assignment and try to get bingo"
      />
      <div className="container">
        {isBingo && <ConfettiExplosion {...confettiProps} />}
      
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
                <input type="checkbox" checked={words.find((w) => w.name === word).checked} onChange={() => handleCheck(word)} />
                <label>{word}</label>
              </div>
            ))}
          </div>
        </div>
        {isBingo && <ConfettiExplosion {...confettiProps} />}
      </div>
    </div>
  );
};



