import './App.css';
import Listing from "./components/Listing";
import Data from "./Data";

function App() {
  return (
    <Listing items={Data}/>
  );
}

export default App;
