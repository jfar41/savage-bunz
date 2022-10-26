import React, {forwardRef} from "react";

export const About = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="pages">
            <div className="about">
                <h1>About</h1>
                <p>
                Savage Buns is a Los Angeles based DJ and aspiring producer. Her style bridges dubstep, bass, experimental, and melodic tracks.
                </p>
                <p>
                She built a love for electronic dance music and started her journey with a simple mission: sharing a new musical language that transformed her life.

                From spinning at house parties to now hosting shows, playing at clubs/bars, and warehouse parties, she continues to share heavy-hitting sound trips with her fans & friends. 
                </p>
                <p>
                Call her savage. Call her buns. Just be ready to go full savage mode when she drops her bass-filled buns!
                </p>
            </div>
        </div>
    )
})