import styled from 'styled-components';

export const CommentItem = styled.div`
    border-radius: 10px;
    display: block;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 10px;
    height: 100px; /* Set a fixed height */
    background-color: ${props => props.theme.commentColor};
`;

export const CommentText = styled.div`
    display: flex;
    height: 30px;
    color: black;
    font-size: ${props => props.theme.textSizeTextS};
    align-items: center;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
`;

export const CommentContent = styled.div`
    display: flex;
    justify-content: space-between;   
    padding: 10px;
`;

export const UserName = styled.div`
  display: flex;
  height: 30px;
  color: black;
  font-size: ${props => props.theme.textSizeTextS};
  align-items: center;
  @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
`;

export const deleteButton = styled.button`
    display: flex;
    flex: 0 0 auto;
    height: 30px;
    padding: 5px;
`;