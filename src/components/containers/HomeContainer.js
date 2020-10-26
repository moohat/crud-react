import React, { Component } from 'react'
import TableComponent from '../TableComponent';

export default class HomeContainer extends Component {
    render() {
        const users = this.props.users;
        return (
            <div>
                <TableComponent users={users} />
               
            </div>
        )
    }
}
