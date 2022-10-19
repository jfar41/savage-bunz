import logo from './logo.svg';
import './App.css';
import {Header} from "./Header"
import { Landing } from "./pages/Landing";
import { Media } from "./pages/Media";
import { About } from './pages/About';
import { Footer } from './Footer';

function App() {
  return (
    <div className='app'>
        <Header />
        <Landing />
        <About />
        <Media />
        <Footer />
    </div>
  );
}

export default App;
