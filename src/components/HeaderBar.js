import React, { Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';


export default function HeaderBar({ headerBarTitle}) {
    return (
        <Navbar style={{ backgroundColor: '#5d79c3' }} light expand="md">
            <NavbarBrand href="/"> <h5 style={{ color: '#fff' }} >{ headerBarTitle }</h5></NavbarBrand>
        </Navbar>
    )
};
