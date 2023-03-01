import React, { useState } from 'react';
import './App.css';
import { Navigation } from './Navigation/Navigation';

function App() {
  const [activeNavigation, setActiveNavigation] = useState(1);
  const navigationItems = [
    { id: 1, name: 'Start page' },
    { id: 2, name: 'Competitions' },
    { id: 3, name: 'Wellness-bingo' },
  ];

  return (
    <div className="App">
      <Navigation
        activeItem={activeNavigation}
        items={navigationItems}
        onItemChange={((id) => setActiveNavigation(id))}
      />

      {activeNavigation === 1 && <div>Start Page</div>}
      {activeNavigation === 2 && <div>Competitions</div>}
      {activeNavigation === 3 && <div>Wellness-Bingo</div>}
      {activeNavigation === 4 && <div>Profile Page</div>}
    </div>
  );
}

export default App;
