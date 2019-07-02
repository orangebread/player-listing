import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlayersAndPagination } from '../actions/players';

class PlayersList extends Component {
    componentDidMount() {
        this.props.fetchPlayersAndPagination();
    }

    renderList() {
        const { data } = this.props.players;
        if (data) {
            return data.map(player => {
                return (
                    <div key={player.name} className="item">
                        <div className="content">
                            <h4>{player.name}</h4>
                            <div>HEIGHT: {player.height}</div>
                            <div>WEIGHT: {player.mass}</div>
                        </div>
                    </div>
                );
            });
        }
        
    }

    render() {
        return (
            <div className="ui list">
                {this.renderList()}
            </div>
        );
    }    
}

const mapStateToProps = state => {
    console.log(state.players.data);
	return {
		players: state.players
	};
}

export default connect(mapStateToProps, { fetchPlayersAndPagination })(PlayersList);