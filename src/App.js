import logo from "./logo.svg";
import "./App.css";
import { useStore } from "./store";
import { toggle } from "./store/creator";

function App() {
  const [{ togglevault }, dispatch] = useStore();
  const { isToggled } = togglevault;
  const handleClick = (e) => {
    dispatch(toggle());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={isToggled ? "App-logo" : "App-logo-reverse"}
          alt="logo"
          onClick={handleClick}
        />
        <p onClick={handleClick}>Click to switch animation</p>
      </header>
    </div>
  );
}

export default App;
