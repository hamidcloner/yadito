import React from "react";
import {
    HeaderWrapper
} from './Header.elements';
// import the components
import Navbar from "../navbar/Navbar";
import HeaderContent from "./headerContent/HeaderContent";



const Header = () => {
    return (
        <HeaderWrapper fluid>
            <Navbar />
            <HeaderContent />
        </HeaderWrapper>

    )
}


export default Header;