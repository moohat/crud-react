import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import EditUserContainer from './components/containers/EditUserContainer';
import HomeContainer from './components/containers/HomeContainer';
import CreateUserContainer from './components/containers/CreateUserContainer';
import DetailUserContainer from './components/containers/DetailUserContainer';
export class App extends Component {

  //! tanpa redux state ditaro di app
  // state = {
  //   title: 'CRUD REACT',
  //   users: [
  //     {
  //         id: 1,
  //         nama: 'taufik',
  //         alamat: 'bogor',
  //         umur: 31,
  //         nohp: '083819005227'
  //     },
  //     {
  //         id: 2,
  //         nama: 'Tia',
  //         alamat: 'bogor',
  //         umur: 24,
  //         nohp: '083819005227'
  //     },
  //     {
  //         id: 3,
  //         nama: 'Syamil',
  //         alamat: 'bogor',
  //         umur: 3,
  //         nohp: '083819005227'
  //     },
  //     {
  //         id: 4,
  //         nama: 'Sakha',
  //         alamat: 'bogor',
  //         umur: 1,
  //         nohp: '083819005227'
  //     }
  // ]
  // }
  render() {
    //! tanpa redux
    // const { title } = this.state;
    return (
      <div>
        <NavbarComponent />
        {/* //! tanpa redux state title dilempar ke JumbotronComponent sebagai props */}
        {/* <JumbotronComponent title={title} /> */}
        <JumbotronComponent/>
        <Router>
          <Route path="/" exact>
        {/* //! tanpa redux state users dilempar ke HomeConainer sebagai props.users,
            //! dari HomeContainer, props.users dilempar ke TableComponent sebagai props.users
            //! dengan menggunakan redux, tidak perlu mendefinisikan state user,
            //! users langsung di definisikan di TableComponent dengan mapStateToProps
        */}
            {/* <HomeContainer users ={this.state.users}/> */}
            <HomeContainer />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
        </Router>
      </div>
    )
  }
}

export default App

