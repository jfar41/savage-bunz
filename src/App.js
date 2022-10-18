import logo from './logo.svg';
import './App.css';
import {Header} from "./Header.js"
import { Landing } from "./pages/Landing.js";
import { Media } from "./pages/Media";
import { About } from './pages/About';

function App() {
  return (
    <div className='app'>
        <Header />
        <Landing />
        <About />
        <Media />
    </div>
  );
}

export default App;
