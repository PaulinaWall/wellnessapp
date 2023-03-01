import React, { useState } from 'react';
import './App.css';
import { Navigation } from './Navigation/Navigation';
import { Competitions } from './Competitions/Competitions';
import { Achievements } from './Achievements/Achievements';
import { StartPage } from './Pages/StartPage/StartPage';
import { WellnessBingo } from './Pages/WellnessBingo/WellnessBingo';
import { Relax } from './Relax/Relax';

function App() {
  const [activeNavigation, setActiveNavigation] = useState(1);
  const navigationItems = [
    { id: 1, name: 'Start page' },
    { id: 2, name: 'Competitions' },
    { id: 3, name: 'Wellness bingo' },
    { id: 4, name: 'Achievements' },
    { id: 5, name: 'Relax' },
  ];

  return (
    <div className="App">
      <Navigation
        activeItem={activeNavigation}
        items={navigationItems}
        onItemChange={((id) => setActiveNavigation(id))}
      />

      {activeNavigation === 1 && <StartPage />}
      {activeNavigation === 2 && <Competitions />}
      {activeNavigation === 3 && <WellnessBingo />}
      {activeNavigation === 4 && <Achievements />}
      {activeNavigation === 5 && <Relax />}
      {activeNavigation === 6 && <div>Profile Page</div>}
    </div>
  );
}

export default App;
