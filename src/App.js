import logo from './logo.svg';
import './App.css';
import {Header} from "./Header"
import { Landing } from "./pages/Landing";
import { About } from './pages/About';
import { Media } from "./pages/Media";
import {Events} from './pages/Events';
import { Contact } from "./pages/Contact";
import { Socials } from './Footer';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from "./aws-exports";
import { useRef } from 'react';
Amplify.configure(awsExports)

function App() {
    const landingRef = useRef(null);
    const aboutRef = useRef(null);
    const mediaRef = useRef(null);
    const eventsRef = useRef(null);
    const socialsRef = useRef(null);
    
    return (
        <div className='app'>
            <Header 
                landingRef={landingRef}
                aboutRef={aboutRef}
                mediaRef={mediaRef}
                eventsRef={eventsRef}
                socialsRef={socialsRef}
            />

            <Landing ref={landingRef}/>
            <About ref={aboutRef}/>
            <Media ref={mediaRef}/>
            <Events ref={eventsRef}/>
            <Contact ref={socialsRef}/>
            <Socials ref={socialsRef}/>
        </div>
    );
}

export default App;
