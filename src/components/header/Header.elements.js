import styled from "styled-components";
import { Container } from "react-bootstrap";


export const HeaderWrapper = styled.header`
    ${Container};
    ${({theme : {organizationalColor : {whiteColor}}}) => `
        background-color : ${whiteColor};
    `}
`;