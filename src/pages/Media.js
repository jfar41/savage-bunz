import React, {forwardRef} from "react";
import ReactPlayer from "react-player";

const promo = require("../videos/promo.mp4")

export const Media = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="pages">
            <div className="media">
                <h1>Media</h1>
                <div className="featured">
                    <ReactPlayer 
                        className="featuredPlayer"
                        width="50%"
                        url="https://soundcloud.com/savagebuns/buns-bangers-birthday-set?si=d7bb3076de164d7f8ef474f0a020e6d3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                    <ReactPlayer
                        className="featuredPlayer"
                        width="50%"
                        url="https://soundcloud.com/savagebuns/savage-destruction-1?si=d7bb3076de164d7f8ef474f0a020e6d3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />

                </div>
                {/* <div className="video">
                    <video
                        controls
                        src={promo}
                        height="400"
                    >

                    </video>
                </div> */}
                <div className="ribbonLayout">
                    <ReactPlayer
                        className="player"
                        width="25%"
                        url="https://soundcloud.com/savagebuns/savage-head-bop-vibes?si=d7bb3076de164d7f8ef474f0a020e6d3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                    <ReactPlayer 
                        className="player"
                        width="25%"
                        url="https://soundcloud.com/savagebuns/feelin-mad-sad?si=d7bb3076de164d7f8ef474f0a020e6d3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                    <ReactPlayer 
                        className="player"
                        width="25%"
                        url="https://soundcloud.com/savagebuns/buns-bangers-kingdom-set?si=09939d8ce25042aa97e455c6651bc699&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                    <ReactPlayer 
                        className="player"
                        width="25%"
                        url="https://soundcloud.com/savagebuns/life-goes-on-a-melodic-tropical-mix?si=09939d8ce25042aa97e455c6651bc699&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                </div>
            </div>
        </div>
    )
})