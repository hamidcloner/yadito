import styled from "styled-components";
import { Container,Col,Row } from "react-bootstrap";



export const NavContainer = styled(Container)`
    font-family : vazirRegularFD;    
`;


// =========== Right Side Navbar Elements ==========

export const RightSideNav = styled(Col)`
`;



export const NavMenuContainer = styled.nav``;

export const Menu = styled.ul`
    ${({theme : {organizationalColor}}) => `
        & :nth-child(2){
            color : ${organizationalColor.pinkColor};
        }
    `}
`;


export const MenuItem = styled.li`
    ${({theme : {sampleBorder,organizationalColor}}) => `
        color : ${organizationalColor.titleTexBlacktColor};
        font-size : 1.3rem;
        padding : 1rem 1.5rem 1rem .5rem;
      
    `}
`;

// ============ Right Side Navbar Elements =============

export const LeftSideNav = styled(Col)`
`;

export const LeftSideWrapper = styled.div`
        // ${({theme}) => `
        //     border : ${theme.sampleBorder};
        // `}
`;


export const ButtonsContainer = styled.div`
`;
export const GoToUserAccountsBtn = styled.button`
        ${({theme : {organizationalColor : {whiteColor,pinkColor},controlStyle}}) => `
            ${controlStyle};
            color : ${whiteColor};
            border : .1rem solid transparent;
            background-color : ${pinkColor};
            font-size : 1.3rem;

            &:hover {
                background-color : ${whiteColor};
                color : ${pinkColor};
                border : .1rem solid ${pinkColor};
            }
        `}

`;

export const BasketIconButton = styled.button`
        ${({theme : {controlStyle,organizationalColor : {pinkColor,whiteColor}}}) => `
            ${controlStyle};
            border : .1rem solid ${pinkColor};
            background-color : ${whiteColor};
            & > svg {
                font-size : 2rem;
            }

            &:hover > svg {
                color : ${pinkColor};
            }
        `}
`;

export const NumberContainer = styled.div`
        ${({theme : {sampleBorder,organizationalColor}}) => `
            & > p {
                font-size : 1.3rem;
            }
            & p:nth-child(1){
                color : ${organizationalColor.titleTexBlacktColor};
            }
            & p:nth-child(2){
                color : ${organizationalColor.pinkColor};
            }
        `}
`;
