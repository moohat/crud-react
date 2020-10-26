import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {connect} from 'react-redux'


const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    title: state.users.title
  }
}

export default connect(mapStateToProps, null) (JumbotronComponent);