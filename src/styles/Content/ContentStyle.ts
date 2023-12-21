import styled from "styled-components";

export const StyledContentContainer = styled.div`
    width: 700px;
    height: calc(100vh - 100px - 2vh - 2vh);
    overflow-y: scroll;
    padding: 50px;
    background-color: #fff;
    border-radius: 15px;
`;

export const StyledMobileContentContainer = styled.div`
    width: 100%;
    height: calc(100vh - 10vh - 4vh - 10vw);
    background: #fff;
    overflow-y: scroll;
    padding: 30px;
    border-radius: 15px;
`;