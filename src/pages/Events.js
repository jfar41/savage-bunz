import React from "react";
import "./pages.scss";
import { FaPlus } from "react-icons/fa";

export class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="pages">
                <div className="events">
                    <h1>Events</h1>
                   
                    <h1 className="">
                        <FaPlus />
                    </h1>
                </div>
            </div>
        )
    }
}

const event = ({...event}) => {
    return (
        <div className="event">
            <div className="date"></div>
            <div className="location"></div>
            <div className="link"></div>
        </div>
    )
}