import React, { Component } from 'react'
import TableComponent from '../TableComponent';
import { connect } from 'react-redux'
import { deleteUserDetail, getUsersList } from '../../redux/action/userAction';


class HomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUsersList())
        this.props.dispatch(deleteUserDetail());
    }
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

export default connect()(HomeContainer);
