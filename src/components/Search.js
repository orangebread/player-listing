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
        const { resultCount } = this.props.players;
        if (resultCount) {
            return (
                <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Player Search ({resultCount}):</label>
                            <input type="text" value={this.state.term}
                            onChange={this.onInputChange} />
                        </div>                    
                    </form>
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
      
    }
}

const mapStateToProps = state => {
	return {
		players: state.players
	};
}

export default connect(mapStateToProps, { searchPlayers })(Search);