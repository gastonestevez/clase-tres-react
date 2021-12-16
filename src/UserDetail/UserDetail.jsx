import React, { Component } from 'react'

export default class UserDetail extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            user: {},
        }
    }

    async componentDidMount(){
        const response = await fetch(`${this.props.apiUrl}/2`)
        const { data } = await response.json()
        this.setState({
            user: data,
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.user.avatar} alt="avatar" />
                <p>{this.state.user.first_name}</p>
                <p>{this.state.user.last_name}</p>
                <p>{this.state.user.email}</p>
            </div>
        )
    }
}
