import { useEffect, useState } from "react"
import { getRule } from "../apis/getRule";
import { StyledBox, StyledClose, StyledCloseWord, StyledMobileRulePopup, StyledRuleGame, StyledRuleLayer, StyledRulePopup, StyledRuleText } from "../styles/Rule/RuleStyle";
import { useStateContext } from "../Context";
import { Mobile, PC } from "../responsive";

interface RuleObject {
    name: string;
    text: string;
}

export const Rule = ({game}: {game:string}) => {
    const {setOnPopup} = useStateContext();
    const [rule, setRule] = useState<Array<RuleObject> | null>(null);

    const getRules = async () => {
        const fetchRule:Array<RuleObject> = await getRule(game);
        setRule(fetchRule);
    }
    
    useEffect(() => {
        if (rule === null) {
            getRules();
        }
    })

    const handleClosePopup = () => {
        setOnPopup(false);
    }

    return(
        <>
            <PC>
                <StyledRuleLayer onClick={handleClosePopup}>
                    <StyledRulePopup>
                        <StyledRuleGame>
                            {rule && rule[0].name === "archery" ? "양궁 쏘기" : ""}
                            {rule && rule[0].name === "tuho" ? "투호 던지기" : ""}
                            {rule && rule[0].name === "jegichagi" ? "제기차기" : ""}
                        </StyledRuleGame>
                        <StyledRuleText>
                            {rule && rule[0].text}
                        </StyledRuleText>
                        <StyledClose>
                            <StyledBox/>
                            <StyledCloseWord>
                                배경을 눌러 꺼주세요
                            </StyledCloseWord>
                        </StyledClose>
                    </StyledRulePopup>
                </StyledRuleLayer>
            </PC>
            <Mobile>
                <StyledRuleLayer onClick={handleClosePopup}>
                    <StyledMobileRulePopup>
                        <StyledRuleGame>
                            {rule && rule[0].name === "archery" ? "양궁 쏘기" : ""}
                            {rule && rule[0].name === "tuho" ? "투호 던지기" : ""}
                            {rule && rule[0].name === "jegichagi" ? "제기차기" : ""}
                        </StyledRuleGame>
                        <StyledRuleText>
                            {rule && rule[0].text}
                        </StyledRuleText>
                        <StyledClose>
                            <StyledBox/>
                            <StyledCloseWord>
                                배경을 눌러 꺼주세요
                            </StyledCloseWord>
                        </StyledClose>
                    </StyledMobileRulePopup>
                </StyledRuleLayer>
            </Mobile>
        </>
    )
}