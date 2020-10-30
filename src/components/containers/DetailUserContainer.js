import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { getUserDetail } from '../../redux/action/userAction'
import DetailUserComponent from './DetailUserComponent'
import BackCompoenent from './BackCompoenent'

class DetailUserContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUserDetail(this.props.match.params.id))
    }


    render() {
        return (
            <Container >
                <div>

                    <BackCompoenent />
                    <h1>Detail User</h1>

                </div>

                <DetailUserComponent />
            </Container>
        )
    }
}



export default connect()(DetailUserContainer);
