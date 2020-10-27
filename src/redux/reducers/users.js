import React from 'react';

let initialState = {
    data: [
        {
            id: 1,
            nama: 'taufik',
            alamat: 'bogor',
            umur: 31,
            nohp: '083819005227'
        },
        {
            id: 2,
            nama: 'Tia',
            alamat: 'bogor',
            umur: 24,
            nohp: '083819005227'
        },
        {
            id: 3,
            nama: 'Syamil',
            alamat: 'bogor',
            umur: 3,
            nohp: '083819005227'
        },
        {
            id: 4,
            nama: 'Sakha',
            alamat: 'bogor',
            umur: 1,
            nohp: '083819005227'
        },
        {
            id: 5,
            nama: 'Humaira',
            alamat: 'bogor',
            umur: 1,
            nohp: '083819005227'
        }
    ],
    error: false,
    title: 'CRUD REACT',

}

const users = (state = initialState, action) => {
    return state
}

export default users
