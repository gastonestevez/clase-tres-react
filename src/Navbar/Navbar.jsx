import React, { Component } from "react"
import { Link } from "react-router-dom"
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/marketplace">Marketplace</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
