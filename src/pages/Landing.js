import React from "react";
import "./pages.scss";

const LANDING_IMAGES = [
    require("../images/landing/savage1.jpg"),
    require("../images/landing/savage2.jpg"),
    require("../images/landing/savage3.jpg"),
    require("../images/landing/savage4.jpg"),
    require("../images/landing/savage5.jpg"),
]
const DEFAULT_IMG_IDX = 0

export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgIdx: DEFAULT_IMG_IDX,
            loading: false
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.loadingImg, 5000);
    }
    componentDidUpdate() {
        // console.log(this.state.imgIdx)
    }
    componentWillUnmount() { 
        clearInterval(this.interval)
    }
    loadingImg = () => {
        this.setState({loading: true}, () => {this.updateImgIdx()})
    }
    updateImgIdx = () => {
        if (this.state.imgIdx >= LANDING_IMAGES.length - 1) {
            this.setState({imgIdx: 0, loading: false})
        } else {
            this.setState({imgIdx: this.state.imgIdx + 1, loading: false})
        }
    }
    render() {

        return (
            <div className="pages">
                <div className="landing">
                    <div className="slideshow">
                        {this.state.loading ? null : <img src={LANDING_IMAGES[this.state.imgIdx]} className="fade" />}
                        <h1>What's poppin?! (besides these buns ;)</h1>
                    </div>
                </div>
            </div>
        )
    }
}