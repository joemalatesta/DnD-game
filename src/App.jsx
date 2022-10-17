import { Routes, Route } from 'react-router-dom'
import GameStart from './pages/Game/GameStart'
import Landing from './pages/Landing/Landing'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/game-start' element={<GameStart />} />
      </Routes>
    </>
  );
}

export default App;


// Aau I want to pull from the stats from their character sheet
// Aau I want to have a hidden map that unveils itself when a sprite moves over it
// Aau I want to find chests and treasure
// Aau I want to be able to move to lower floors in the dungeon
// Aau I want to pull the stats of the monsters from the dnd api
// Aau I want the sprite to spin to the direction that it is moving
// Aau I want a description of what the area is when I arrive (like a modal when entering a room)
// Aau I want a 20 sided die to appear when I am attacking 
// Aau I want to gain experience when doing things like picking a lock or defeating an enemy 
// Aau I want to display a character in line with the class they chosen. 
// Aau I want to have. Inventory of items.  Things that I can use/eat/ drink
// Aau I want to have a health/hunger system
// Aau I want to have perception checks ex you see a rustling near the eDge of the road up ahead. In a modal that is labeled the dm says 
// Aau as the levels get deeper the monster levels should increase