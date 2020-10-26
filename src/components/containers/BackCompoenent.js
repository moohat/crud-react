import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'

function BackCompoenent() {
    return (
        <Container>
            <Row>
                <Col>
                    <Link to="/">
                        <Button>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                            {' '}Back
                         </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default BackCompoenent
