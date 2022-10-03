import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="App-header">
      <img 
        src="/images/logo.svg" 
        alt="logo" 
        className="App-logo"
        style={{ width: "100px", height: "100px" }}
      />
      <Link to="/game-start" >START GAME</Link>
    </header>
  );
}

export default NavBar;