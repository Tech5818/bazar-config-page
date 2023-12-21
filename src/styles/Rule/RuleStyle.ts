import styled from "styled-components";

export const StyledRuleLayer = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const StyledRulePopup = styled.div`
    width: 500px;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-flow: column;
    border-radius: 20px;
`;

export const StyledMobileRulePopup = styled(StyledRulePopup)`
    width: 90vw;
`;

export const StyledRulePopupOpenButton = styled.div`
    text-decoration: underline;
    cursor: pointer;
    text-align: right;
    font-size: 1.3rem;
`;

export const StyledRuleGame = styled.div`
    font-size: 2rem;
    font-family: "SejonghospitalBold";
    margin-bottom: 1rem;
`;

export const StyledRuleText = styled.div`
    max-width: 500px;
    word-break: break-all;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
`;

export const StyledClose = styled.div`
    display: flex;
`;

export const StyledBox = styled.div`
    flex: 1;
`;

export const StyledCloseWord = styled.div`
    color: #888;
`;