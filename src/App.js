import logo from './logo.svg';
import './App.css';
import {Header} from "./Header.js"
import { Landing } from "./pages/Landing.js";

function App() {
  return (
    <div className='app'>
        <Header />
        <Landing />
    </div>
  );
}

export default App;
