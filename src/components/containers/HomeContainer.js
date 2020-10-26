import React, { Component } from 'react'
import TableComponent from '../TableComponent';

export default class HomeContainer extends Component {
    render() {
        //! tanpa redux
        // const users = this.props.users;
        return (
            <div>
                {/* //! tanpa redux */}
                {/* <TableComponent users={users} /> */}
                {/* //! using redux */}
                <TableComponent />
               
            </div>
        )
    }
}
