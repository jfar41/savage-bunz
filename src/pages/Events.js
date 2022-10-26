import React, { forwardRef } from "react";
import { createEvent } from "../graphql/mutations"
import { listEvents } from "../graphql/queries";
import { Amplify, API, graphqlOperation } from 'aws-amplify';

import "./pages.scss";
import { FaPlus, FaTimes } from "react-icons/fa";

const initialState = {date: '', description: "", location: "", pictureStorageID: "", status: "", url: "", venue: ""}


const InputForm = ({formState, setInput}) => {
    return (
        <div className="inputForm">
            <div className="head">
                <p><FaTimes /></p>
            </div>
            <div className="inputs">
                <input
                    value={formState.date}
                    onChange={e => setInput('date', e.target.value)}
                    placeholder="Date"
                    className="input"
                />
                <input
                    value={formState.description}
                    onChange={e => setInput('description', e.target.value)}
                    placeholder="Description"
                    className="input"
                />
                <input
                    value={formState.location}
                    onChange={e => setInput('location', e.target.value)}
                    placeholder="Location"
                    className="input"
                />
                <input
                    value={formState.location}
                    onChange={e => setInput('venue', e.target.value)}
                    placeholder="Venue"
                    className="input"
                />
                <input
                    value={formState.status}
                    onChange={e => setInput('status', e.target.value)}
                    placeholder="Status"
                    className="input"
                />
                <input
                    value={formState.url}
                    onChange={e => setInput('url', e.target.value)}
                    placeholder="Url"
                    className="input"
                />

            </div>
            <div className="head">
            <h3>Add Event</h3>

            </div>

        </div>
    )
}

const Event = ({event}) => {
    return (
        <div className="event">
            <div className="field">{event.date}</div>
            <div className="field">{event.address}</div>
            <a href={event.url} className="status field">{event.status}</a>
        </div>
    )
}

class EventsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            formState: initialState,
            addingEvent: false
        }
    }
    componentDidMount() {
        this.fetchEvents();
    }
    fetchEvents = async () => {
        try {
            const eventData = await API.graphql(graphqlOperation(listEvents))
            const events = eventData.data.listEvents.items
            this.setState({events}, () => console.log("Success fetching"))
        } catch (err) { console.log("error fetching events", err)}
    }
    addEvent = async () => {
        try {
            if (!this.state.formState.location || !this.state.formState.description) return
            if (!this.state.formState.status || !this.state.formState.description) return
            const event = {...this.state.formState}
            this.setState({events: [...this.state.events, event]})
            this.setState({formState: initialState})
            await API.graphql(graphqlOperation(createEvent, {input: event}))
        } catch (err) {
            console.log(`error creating todo: `, err)
        }
    }
    setInput = (key, value) => {
        const formState = {...this.state.formState}
        console.log(formState)
        formState[key] = value
        this.setState({formState: formState})
    }
    render() {
        return (
            <div ref={this.props.innerRef} className="pages">
                <div className="events">
                    <h1>Events</h1>
                    {this.state.events.length > 0 ? this.state.events.map(event => <Event event={event} />) : "No EVENTS!"}
                    {/* {this.state.addingEvent ? <InputForm formState={this.state.formState} setInput={this.setInput} />: <FaPlus onClick={() => this.setState({addingEvent: !this.state.addingEvent })} className="button"/>} */}
                </div>
            </div>
        )
    }
}
export const Events = forwardRef((props, ref) => <EventsComponent innerRef={ref} />)

const event = ({...event}) => {
    return (
        <div className="event">
            <div className="date"></div>
            <div className="location"></div>
            <div className="link"></div>
        </div>
    )
}