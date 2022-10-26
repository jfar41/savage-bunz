import "./app.scss";
import React, { useRef } from "react";

const closedBtn = require("./images/closed.png")
const openedBtn = require("./images/opened.png")
export const Header = (props) => {
    const {aboutRef, mediaRef, eventsRef, socialsRef} = props
    const NAVIGATIONS_REF = {
        "about": aboutRef,
        "media": mediaRef,
        "events": eventsRef,
        "contact": socialsRef,
        "socials": socialsRef
    }
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsiveNav");
    }

    const handleNavigation = (e, type) => {
        console.log('handling')
        e.preventDefault();

        // socialsRef.current.scrollIntoView({ behavior: 'smooth' })
        NAVIGATIONS_REF[type].current.scrollIntoView({ behavior: 'smooth'})
        // console.log(ref)
    }
    return (
        <div className="header">
            <img src={require("./images/sb-logo.png")} className="logo"/>
            <div className="nav">
                <nav ref={navRef}>
                    <a href="/about" onClick={(e) => handleNavigation(e, "about")}>About</a>
                    <a href="/media" onClick={(e) => handleNavigation(e, "media")}>Media</a>
                    <a href="/events" onClick={(e) => handleNavigation(e, "events")}>Events</a>
                    <a href="/contact" onClick={(e) => handleNavigation(e, "socials")}>Contact</a>
                    <a href="/socials" onClick={(e) => handleNavigation(e, "socials")}>Socials</a>
                    <img src={openedBtn} className="navBtn navCloseBtn" onClick={showNavBar}/>
                </nav>
                <img src={closedBtn} className="navBtn" onClick={showNavBar}/>
            </div>
            </div>
    )
}