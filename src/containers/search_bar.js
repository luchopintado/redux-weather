import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <form className="input-group">
                <input type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"></button>
                </span>
            </form>
        );
    }
}

export default SearchBar;
