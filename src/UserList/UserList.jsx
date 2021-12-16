import React, { Component } from 'react'
import Searcher from '../Searcher'
import { Link, withRouter } from "react-router-dom"

class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: [],
            filteredUserList: [],
            loading: false,
        }
    }
    async componentDidMount(){
        this.setState({
            loading: true
        })
        const response = await fetch(this.props.apiUrl)
        const { data } = await response.json()
        this.setState({
            users: data,
            filteredUserList: data,
            loading: false
        })
    }

    handleSearcherChange(value){
        const filteredUsers = this.state.users.filter(user => {
            const rx = new RegExp(value, 'i')
            return user.first_name.match(rx) || user.last_name.match(rx)
        })
        this.setState({
            filteredUserList: filteredUsers
        })
    }

    render() {
        return (
            <>
                <div>
                    <Searcher onChange={(value) => this.handleSearcherChange(value)} />
                </div>
                {
                    this.state.loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <ul>
                                {
                                    this.state.filteredUserList.map( user => {
                                        return (
                                            <Link to={`/detail/${user.id}`}>
                                                <li key={user.id}> {`${user.first_name} ${user.last_name}`} </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </>
        )
    }
}

export default withRouter(UserList)