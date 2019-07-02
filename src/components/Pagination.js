import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlayersAndPagination, fetchSearchPagination } from '../actions/players';

class Pagination extends Component {
    pageHandler(page) {
        this.props.fetchPlayersAndPagination(this.props.players.query, page);
    }

    renderPageList() {
        let numOfPages = [];
        for (let i = 1; i < Math.ceil(this.props.players.resultCount / 10) + 1; i++) {
            numOfPages.push(i);
        }    

        return numOfPages.map(page => {
            return (    
                <div
                    key={page}
                    className={this.props.pagination.currentPage === page ? 'item active' : 'item'}
                    onClick={() => this.pageHandler(page)}
                    >
                    {page}
                </div>
            );
        })
        
    }

    render() {
        // no need for pagination if results less than limit
        if (this.props.players.count <= 10) {
            return null;
        }

        return (
            <div className="ui secondary pointing menu">
                {this.renderPageList()}
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

export default connect(mapStateToProps, { fetchPlayersAndPagination, fetchSearchPagination })(Pagination);