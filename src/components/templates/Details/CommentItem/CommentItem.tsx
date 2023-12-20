import styled from 'styled-components';
import 'src/components/templates/Details/form.css';

export const YourNameLabel = styled.div`
    display: flex;
    width: 100%;
    text-shadow:  2px 3px 1px rgba(0, 0, 0, 0.75);
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.accentColor1};
`;

export const CommentTextLabel = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    text-shadow:  2px 3px 1px rgba(0, 0, 0, 0.75);
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.accentColor1};
`;

export const CommentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    text-shadow:  2px 3px 1px rgba(0, 0, 0, 0.75);
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.accentColor1};
`;

export const CommentItem = styled.div`
    display: flex;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.accentColor1};
`;