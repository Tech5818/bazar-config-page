import React from "react";
import { StyledListItemRank, StyledListItemContainer, StyledListItemName, StyledListItemScore } from "../styles/List/ListsStyle";

interface ListItemProps {
    name: string;
    score: number;
    rank: number;
}

export const ListItem: React.FC<ListItemProps> = ({name, score, rank}) => {
    return(
        <>
            <StyledListItemContainer>
                <StyledListItemRank>
                    {rank}위
                </StyledListItemRank>
                <StyledListItemName>
                    {name}
                </StyledListItemName>
                <StyledListItemScore>
                    {score}점
                </StyledListItemScore>
            </StyledListItemContainer>
        </>
    )
}