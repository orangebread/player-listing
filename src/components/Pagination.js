import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlayersAndPagination } from '../actions/players';

class Pagination extends Component {
    pageHandler(page) {
        this.props.fetchPlayersAndPagination(page);
    }

    renderPageList() {
        let numOfPages = [];
        if (this.props.players.isSearch) {
            console.log(this.props.players.data);
            for (let i = 1; i < Math.ceil(this.props.players.data.length / 10) + 1; i++) {
                numOfPages.push(i);
            } 
        } else {
            for (let i = 1; i < Math.ceil(this.props.pagination.count / 10) + 1; i++) {
                numOfPages.push(i);
            }
        }        

        console.log(numOfPages);

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

export default connect(mapStateToProps, { fetchPlayersAndPagination })(Pagination);