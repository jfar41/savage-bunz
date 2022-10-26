import "./app.scss";
import React, { useRef } from "react";

const closedBtn = require("./images/closed.png")
const openedBtn = require("./images/opened.png")
export const Header = (props) => {
    const {landingRef, aboutRef, mediaRef, eventsRef, socialsRef} = props
    const NAVIGATIONS_REF = {
        "landing": landingRef,
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
        e.preventDefault();
        NAVIGATIONS_REF[type].current.scrollIntoView({block: "start", inline:"nearest", behavior: 'smooth'})
        if (type !== "landing" && window.innerWidth <= 820) {
            showNavBar()
        }
    }
    return (
        <div className="header">
            <img src={require("./images/sb-logo.png")} className="logo" onClick={(e) => handleNavigation(e, "landing")}/>
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