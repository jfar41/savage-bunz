import React, { useEffect, useState } from "react";
import { createEvent } from "../graphql/mutations"
import { listEvents } from "../graphql/queries";
import { Amplify, API, graphqlOperation } from 'aws-amplify';

import "./pages.scss";
import { FaPlus } from "react-icons/fa";

const initialState = {date: '', description: "", location: "", pictureStorageID: "", status: "", url: ""}

const InputForm = ({formState, setInput}) => {
    return (
        <>
            <input
                value={formState.date}
                onChange={e => setInput('date', e.target.value)}
                placeholder="Date"
                className="input"
            />
            <input
                value={formState.date}
                onChange={e => setInput('description', e.target.value)}
                placeholder="description"
                className="input"
            />
            <input
                value={formState.date}
                onChange={e => setInput('location', e.target.value)}
                placeholder="location"
                className="input"
            />
            <input
                value={formState.date}
                onChange={e => setInput('status', e.target.value)}
                placeholder="status"
                className="input"
            />
            <input
                value={formState.date}
                onChange={e => setInput('url', e.target.value)}
                placeholder="url"
                className="input"
            />

        </>
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
        this.setState({formState: {...this.state.formState, [key]: value}})
    }
    render() {
        return (
            <div className="pages">
                <div className="events">
                    <h1>Events</h1>
                    {this.state.events.length > 0 ? <Events /> : "No EVENTS!"}
                    <h1 className="inputForm">
                        {this.state.addingEvent ? <InputForm formState={this.state.formState} setInput={this.setInput} />: <FaPlus />}
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