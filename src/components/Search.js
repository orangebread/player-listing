import React, { Component } from 'react';

import { connect } from 'react-redux';

import { searchPlayers } from '../actions/players';

class Search extends Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchPlayers(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Player Search ({this.props.pagination.count}):</label>
                        <input type="text" value={this.state.term}
                        onChange={this.onInputChange} />
                    </div>                    
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
        pagination: state.pagination,
		players: state.players
	};
}

export default connect(mapStateToProps, { searchPlayers })(Search);