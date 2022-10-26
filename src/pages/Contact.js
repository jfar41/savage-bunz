import React, {forwardRef} from "react";
import "./pages.scss";

export const Contact = forwardRef((props, ref) => {
    console.log("contac ref", ref)
    return (
        <div ref={ref} className="pages">
            <div className="contact">
                <a href="mailto:Djsavagebuns.com" className="contactBtn">Contact Savage Bunz</a>
            </div>
        </div>
    )
})