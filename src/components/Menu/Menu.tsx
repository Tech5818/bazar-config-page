import { useStateContext } from "../../Context"
import { StyledMenuContainer, StyledMenuItem, StyledMenuItemText, StyledMobileMenuContainer } from "../../styles/Menu/MenuStyle"
import { PC, Mobile } from "../../responsive";

export const Menu = () => {
    const {archeryCheck, tuhoCheck, jegichagiCheck, setArcheryCheck, setTuhoCheck, setJegichagiCheck} = useStateContext();

    return(
        <>
            <PC>
                <StyledMenuContainer>
                    <StyledMenuItem 
                        onClick={() => {
                            setArcheryCheck(true);
                            setTuhoCheck(false);
                            setJegichagiCheck(false);
                        }}
                        to="/"
                    >
                        <StyledMenuItemText $check={archeryCheck.toString()}>
                            양궁
                        </StyledMenuItemText>
                    </StyledMenuItem>
                    <StyledMenuItem 
                        onClick={() => {
                            setArcheryCheck(false);
                            setTuhoCheck(true);
                            setJegichagiCheck(false);
                        }}
                        to="/tuho"
                    >
                        <StyledMenuItemText $check={tuhoCheck.toString()}>
                            투호
                        </StyledMenuItemText>
                    </StyledMenuItem>
                    <StyledMenuItem 
                        onClick={() => {
                            setArcheryCheck(false);
                            setTuhoCheck(false);
                            setJegichagiCheck(true);
                        }}
                        to="/jegichagi"
                    >
                        <StyledMenuItemText $check={jegichagiCheck.toString()}>
                            제기차기
                        </StyledMenuItemText>
                    </StyledMenuItem>
                </StyledMenuContainer>
            </PC>
            <Mobile>
                <StyledMobileMenuContainer>
                    <StyledMenuItem 
                        onClick={() => {
                            setArcheryCheck(true);
                            setTuhoCheck(false);
                            setJegichagiCheck(false);
                        }}
                        to="/"
                    >
                        <StyledMenuItemText $check={archeryCheck.toString()}>
                            양궁
                        </StyledMenuItemText>
                    </StyledMenuItem>
                    <StyledMenuItem 
                        onClick={() => {
                            setArcheryCheck(false);
                            setTuhoCheck(true);
                            setJegichagiCheck(false);
                        }}
                        to="/tuho"
                    >
                        <StyledMenuItemText $check={tuhoCheck.toString()}>
                            투호
                        </StyledMenuItemText>
                    </StyledMenuItem>
                    <StyledMenuItem 
                        onClick={() => {
                            setArcheryCheck(false);
                            setTuhoCheck(false);
                            setJegichagiCheck(true);
                        }}
                        to="/jegichagi"
                    >
                        <StyledMenuItemText $check={jegichagiCheck.toString()}>
                            제기차기
                        </StyledMenuItemText>
                    </StyledMenuItem>
                </StyledMobileMenuContainer>
            </Mobile>
        </>
    )
}