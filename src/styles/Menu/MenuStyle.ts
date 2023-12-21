import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenuContainer = styled.div`
    width: 700px;
    height: 100px;
    background: #fff;
    margin-bottom: 2vh;
    display: flex;
    border-radius: 15px;
    margin-top: 2vh;
`;

export const StyledMobileMenuContainer = styled.div`
    width: 90vw;
    height: 10vh;
    background: #fff;
    margin-bottom: 4vh;
    display: flex;
    border-radius: 15px;
    margin-top: 5vw;
`;

export const StyledMenuItem = styled(Link)`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .15s;
    border-radius: 15px;
    
    &:hover {
        background: #FFD580;
        color: #fff;
        font-family: 'SejonghospitalBold';
    }
`;

export const StyledMobileMenuItem = styled(StyledMenuItem)`
    &:hover {
        background: transparent;
        color: inherit;
        font-family: 'SejonghospitalLight';
    }
`;

interface MenuItemTextProps {
    $check: string;
}

export const StyledMenuItemText = styled.span<MenuItemTextProps>`
    font-size: 2rem;
    cursor: pointer;
    position: relative;
    font-family: ${({$check}) => ($check === "true" ? 'SejonghospitalBold' : "inherit")};
    &:hover {
        &:after {
            transform: scale(1);
        }
    }
    &:after {
        content: "";
        height: 5px;
        background: #fff;
        position: absolute;
        top: 105%;
        left: 0;
        width: 100%;
        transform: scale(0);
        transition: all.15s;
    }
    
`;

export const StyledMobileMenuItemText = styled(StyledMenuItemText)`
    font-size: 1.5rem;
    &:after{
        content: "";
        display: none;
    }
`;