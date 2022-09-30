import React, { Component } from 'react'
import './message.css';



class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Christopher'
        }
    }
        

    changeMessage() {
        this.setState({
            message: 'Happy learning react Christopher!'
        })
    }


    render() {
        return (
            <div className='btn'>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>checkOut</button>
            </div>
        )
    }
}

export default Message