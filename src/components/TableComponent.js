import { faEdit, faInfo, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Button, Container, NavLink } from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: () => {
        return { width: '5%' }
    },
    sort: true
}, {
    dataField: 'nama',
    text: 'Nama',
    headerStyle: () => {
        return { width: '15%' }
    },
    sort: true
}, {
    dataField: 'umur',
    text: 'Umur',
    headerStyle: () => {
        return { width: '8%' }
    },
    sort: true

}, {
    dataField: 'alamat',
    text: 'Alamat',
    headerStyle: () => {
        return { width: '15%' }
    },
}, {
    dataField: 'nohp',
    text: 'No Hp',
    headerStyle: () => {
        return {
            width: '15%',
            alignItems: 'center'
        }
    },
}, {
    dataField: 'link',
    text: 'Action',
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"detail/" + row.id}>
                    <Button color="info" className="mr-2">
                        <FontAwesomeIcon icon={faInfo} />
                        {" "}Detail
                        </Button>
                </Link>
                <Link to={"edit/" + row.id}>
                    <Button color="warning" className="mr-2">
                        <FontAwesomeIcon icon={faEdit} />
                        {" "}Edit
                        </Button>
                </Link>
                <Link to={"delete/" + row.id}>
                    <Button color="danger" className="mr-2">
                        <FontAwesomeIcon icon={faTrash} />
                        {" "}Delete
                        </Button>
                </Link>

                {/* </NavLink> */}
            </div>
        )
    }
}];





const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];


const TableComponent = (props) => {

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
            Showing { from} to { to} of { size} Results
        </span>
    );
    const options = {
        paginationSize: 4,
        pageStartIndex: 1,
        alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '2', value: 2
        }, {
            text: '3', value: 3
        }, {
            text: 'All', value: props.users.length
        }] // A numeric array is also available. the purpose of above example is custom the text
    };


    return (
        <Container>


            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={props.users}
                columns={columns}
                defaultSorted={defaultSorted}

                search
            >
                {
                    props => (
                        <div>
                            <div className="float-left">
                                <Link to="/create">

                                    <Button>
                                        <FontAwesomeIcon icon={faUser} />
                                        {' '}Tambah
                                        </Button>
                                </Link>
                            </div>
                            <div className="float-right">

                                <SearchBar {...props.searchProps} placeholder="Search..." />
                            </div>
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory(options)
                                }
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container>
    )
}

export default TableComponent
