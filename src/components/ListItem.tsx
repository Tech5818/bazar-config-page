import React from "react";
import { StyledListItemRank, StyledListItemContainer, StyledListItemName, StyledListItemScore, StyledListItemMedal } from "../styles/List/ListsStyle";

interface ListItemProps {
    name: string;
    score: number;
    rank: number;
}

export const ListItem: React.FC<ListItemProps> = ({name, score, rank}) => {
    return(
        <>
            <StyledListItemContainer $rank={rank}>
                <StyledListItemRank $rank={rank}>
                    {rank}위
                </StyledListItemRank>
                <StyledListItemName $rank={rank}>
                    {name}
                </StyledListItemName>
                <StyledListItemMedal>
                    {rank === 1 ? "🥇" : ""}
                    {rank === 2 ? "🥈" : ""}
                    {rank === 3 ? "🥉" : ""}
                </StyledListItemMedal>
                <StyledListItemScore $rank={rank}>
                    {score}점
                </StyledListItemScore>
            </StyledListItemContainer>
        </>
    )
}