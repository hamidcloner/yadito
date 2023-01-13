import styled from "styled-components";
import { sizes,breakPoints } from "./breakPoints";
import { createGlobalStyle } from "styled-components";
// import the fonts
import iranSansBold from '../assets/fonts/IRAN_Sans_Bold.ttf';
import iranSansLight from '../assets/fonts/IRAN_Sans_Light.ttf';
import peydaBlack from '../assets/fonts/PEYDA-BLACK.TTF';
import peydaBold from '../assets/fonts/PEYDA-BOLD.TTF';
import shabnam from '../assets/fonts/Shabnam.ttf';
import vazirBoldFD from '../assets/fonts/Vazir-Bold-FD.woff';
import vazirRegularFD from '../assets/fonts/Vazir-Regular-FD.woff';
// --------------------------------------------



const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        padding : 0;
        margin : 0;
        box-sizing : border-box;
    }
    ul,ol {
        list-style : none;
    }
    a {
        text-decoration : none;
    }
    a.hover {
        color : unset;
    }

    html {
        font-size : 10px;
        @media only screen and (max-width : ${sizes.md}){
            font-size : 8px;
        }
    }
    @font-face {
        font-family : iranSansBold;
        src : url(${iranSansBold}) format('truetype');
        font-weight : normal;
    }
    @font-face {
        font-family : iranSansLight;
        src : url(${iranSansLight}) format('truetype');
        font-weight : normal;
    }
    @font-face {
        font-family : peydaBlack;
        src : url(${peydaBlack}) format('truetype');
        font-weight : normal;
    }
    @font-face {
        font-family : peydaBold;
        src : url(${peydaBold}) format('truetype');
        font-weight : normal;
    }
    @font-face {
        font-family : shabnam;
        src : url(${shabnam}) format('truetype');
        font-weight : normal;
    }
    @font-face {
        font-family : vazirBoldFD;
        src : url(${vazirBoldFD}) format('woff');
        font-weight : normal;
    }
    @font-face {
        font-family : vazirRegularFD;
        src : url(${vazirRegularFD}) format('woff');
        font-weight : normal;
    }


`;






export default GlobalStyle;