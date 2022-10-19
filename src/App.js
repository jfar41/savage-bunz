import logo from './logo.svg';
import './App.css';
import {Header} from "./Header"
import { Landing } from "./pages/Landing";
import { About } from './pages/About';
import { Media } from "./pages/Media";
import { Events } from './pages/Events';
import { Footer } from './Footer';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from "./aws-exports";
Amplify.configure(awsExports)

function App() {
  return (
    <div className='app'>
        <Header />
        <Landing />
        <About />
        <Media />
        <Events />
        <Footer />
    </div>
  );
}

export default App;
