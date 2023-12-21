import styled from "styled-components";

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
export const StyledListItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 25px;
    width: 100%;
    height: 70px;
    font-size: 1.5rem;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 15px;
`;

/**
 * @todo 랭킹이 표시되는 Component
 */
export const StyledListItemRank = styled.div`
    margin-right: 10px;
`;

/**
 * @todo 이름이 표시되는 Component
 */
export const StyledListItemName = styled.div`
    flex: 1;
`;

/**
 * @todo 점수가 표시되는 Component
 */
export const StyledListItemScore = styled.div`

`;