import styled from "styled-components";

interface RankProps {
    $rank: number;
}

/**
 * @todo 랭킹 List를 감싸는 components
 */
export const StyledLists = styled.div`
    display: flex;
    flex-flow: column;
    gap: 15px;
`;

/**
 * @todo 랭킹 ListItem들을 감싸는 Container Component
 */
export const StyledListItemContainer = styled.div<RankProps>`
    display: flex;
    align-items: center;
    padding: 10px 25px;
    width: 100%;
    height: 70px;
    font-size: 1.5rem;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 15px;
    background: ${({$rank}) => ($rank === 1 ? "rgba(212, 175, 55, 0.2)" : "")};
    background: ${({$rank}) => ($rank === 2 ? "rgba(192, 192, 192, 0.2)" : "")};
    background: ${({$rank}) => ($rank === 3 ? "rgba(205, 127, 50, 0.2)" : "")};
`;

/**
 * @todo 랭킹이 표시되는 Component
 */
export const StyledListItemRank = styled.div<RankProps>`
    height: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    color: ${({$rank}) => ($rank === 1 ? "#D4AF37" : "")};
    color: ${({$rank}) => ($rank === 2 ? "#C0C0C0" : "")};
    color: ${({$rank}) => ($rank === 3 ? "#CD7F32" : "")};
    font-family: ${({$rank}) => ($rank <= 3 ? "SejonghospitalBold" : "")};
`;

/**
 * @todo 이름이 표시되는 Component
 */
export const StyledListItemName = styled.div<RankProps>`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: ${({$rank}) => ($rank <= 3 ? "SejonghospitalBold" : "")};
`;

export const StyledListItemMedal = styled.div`
    flex: 1;
    transform: translateY(-1px);
`;

/**
 * @todo 점수가 표시되는 Component
 */
export const StyledListItemScore = styled.div<RankProps>`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: ${({$rank}) => ($rank <= 3 ? "SejonghospitalBold" : "")};
`;