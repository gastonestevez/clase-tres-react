import React, { Component } from 'react'

export default class Searcher extends Component {

    handleOnChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <>
                <input type="text" onChange={(e) => this.handleOnChange(e)} />
            </>
        )
    }
}
