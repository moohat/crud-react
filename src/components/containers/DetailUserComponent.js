import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'reactstrap';



const DetailUserComponent = (props) => {

    const { nama, umur, alamat, nohp } = props.getUserDetail;
    return (
            <Table striped>
               
                <tbody>
                    <tr>
                        <td width="200">Nama</td>
                        <td width="10">:</td>
                        <td>{nama}</td>
                </tr>
                <tr>
                        <td width="200">Nama</td>
                        <td width="10">:</td>
                        <td>{umur}</td>
                </tr>
                <tr>
                        <td width="200">Alamat</td>
                        <td width="10">:</td>
                        <td>{alamat}</td>
                </tr>
                <tr>
                        <td width="200">No Hp</td>
                        <td width="10">:</td>
                        <td>{nohp}</td>
                    </tr>

                </tbody>
            </Table>
    )
}

const mapStateToProps = state => {
    return {
        getUserDetail: state.users.getUserDetail,
        errorUserDetail: state.users.errorUsersList

    }
}
export default connect(mapStateToProps, null)(DetailUserComponent);
