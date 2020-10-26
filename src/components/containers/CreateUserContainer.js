import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackCompoenent from './BackCompoenent'

export default class CreateUserContainer extends Component {
    render() {
        return (
            <Container>
                
                <BackCompoenent />
                <div>
                    <input type="text" className='form-control' placeholder='Input your name'/>
                </div>
            </Container>

        )
    }
}
