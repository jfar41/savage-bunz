import React, {useRef} from "react";
import { FaInstagram, FaSoundcloud } from "react-icons/fa"
import { SiVenmo } from "react-icons/si"
import "./app.scss";

export const Footer = () => {
    return (
        <div className="footer">
            <nav>
                <a href="https://www.instagram.com/savagebuns/"><FaInstagram /></a>
                <a href="https://soundcloud.com/savagebuns"><FaSoundcloud /></a>
                <a href="https://account.venmo.com/u/vivdgaf"><SiVenmo /></a>
            </nav>
        </div>

    )
}