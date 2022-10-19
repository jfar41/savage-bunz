import React, { useEffect, useState } from "react";
import { createEvent } from "../graphql/mutations"
import { listEvents } from "../graphql/queries";
import { Amplify, API, graphqlOperation } from 'aws-amplify';

import "./pages.scss";
import { FaPlus, FaTimes } from "react-icons/fa";

const initialState = {date: '', description: "", location: "", pictureStorageID: "", status: "", url: ""}

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

const EventsList = () => {
    
}

export class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            formState: initialState,
            addingEvent: false
        }
    }
    componentDidMount() {
        this.fetchEvents()
    }
    fetchEvents = async () => {
        try {
            const eventData = await API.graphql(graphqlOperation(listEvents))
            const events = eventData.data.listEvents.items
            this.setState({events}, () => console.log("Success fetching"))
        } catch (err) { console.log("error fetching events")}
    }
    addEvent = async () => {
        try {
            if (!this.state.formState.date || !this.state.formState.description) return
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
            <div className="pages">
                <div className="events">
                    <h1>Events</h1>
                    {this.state.events.length > 0 ? <Events /> : "No EVENTS!"}
                    {this.state.addingEvent ? <InputForm formState={this.state.formState} setInput={this.setInput} />: <FaPlus onClick={() => this.setState({addingEvent: !this.state.addingEvent })} className="button"/>}
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