import "./app.scss";
import React, { useRef } from "react";

const closedBtn = require("./images/closed.png")
const openedBtn = require("./images/opened.png")
export const Header = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsiveNav");
    }
    return (
        <div className="header">
            <img src={require("./images/sb-logo.png")} className="logo"/>
            <div className="nav">
                <nav ref={navRef}>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/media">Media</a>
                    <a href="/socials">Socials</a>
                    <img src={openedBtn} className="navBtn navCloseBtn" onClick={showNavBar}/>
                </nav>
                <img src={closedBtn} className="navBtn" onClick={showNavBar}/>
            </div>
            </div>
    )
}