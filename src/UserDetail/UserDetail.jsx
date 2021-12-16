import React, { Component } from "react"
import { withRouter } from "react-router-dom"
class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loading: false,
        }
    }

    async componentDidMount() {
        const userId = this.props.match.params.userId
        if (userId) {
            this.setState({
                loading: true,
            })
            const response = await fetch(`${this.props.apiUrl}/${userId}`)
            const { data } = await response.json()
            this.setState({
                user: data,
                loading: false,
            })
        }
    }

    render() {
        return (
            <>
                {this.state.loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <img src={this.state.user.avatar} alt="avatar" />
                        <p>{this.state.user.first_name}</p>
                        <p>{this.state.user.last_name}</p>
                        <p>{this.state.user.email}</p>
                    </div>
                )}
            </>
        )
    }
}

export default withRouter(UserDetail)
