import styled from "styled-components"
export const CardGenres = styled.div`
    display: flex;
`;

export const CardDescription = styled.div`
    flex-direction: column;
`;

export const RatingIcon = styled.div`
    display: inline;
    margin: 10px;
    color:  ${props=> props.theme.accentColor1};
    font-size: ${props=> props.theme.textSizeTextM};
`;

export const Rating = styled.div`
    padding: 0px 10px;
    font-color: ${props=> props.theme.accentColor1};
    font-size: ${props=> props.theme.textSizeTextM};
    display: grid;
    height: 100%;
    display: inline;
`;

export const Genres = styled.div`
    padding: 10px;
    align-items: left;
`;

export const GenresItem = styled.div`
    margin: 5px 0px;
    display: flex;
    background-color: ${props => props.theme.accentColor1};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    border-radius: 10px;
`;

export const GenresText = styled.div`
    flex-direction: left;
    font-color: ${props => props.theme.textGenreColor};
    margin: 5px;
    font-weight: 500;
`;

export const Film = styled.div`
    cursor: pointer;
    background-color: ${props => props.theme.iconColor};
    box-shadow: 0px 0px 10px ${props => props.theme.shadowColor};
    border-radius:10px;
    overflow: hidden;
    transition: all 0.3s ease;
    margin: 20px;
`;

export const Content = styled.div`
    display: flex;
    padding: 1px;
    @media (max-width: 769px) {
        flex-direction: column;
    }
`;

export const Card = styled.img` 
    align: left;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 769px) {
        max-height:300px;
    }
`;

export const Name = styled.div`
    text-align: left;
    font-size: ${props => props.theme.textSizeTextM};
    letter-spacing: 1px;
    overflow: hidden;
    margin: 10px 0px 0px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    @media (max-width: 992px) and (min-width: 768px)  {
        font-size: ${props => props.theme.textSizeTextM900};
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Text = styled.div`
    margin: 10px 0px 10px 0px;
    padding: 0px 10px;
    display: row;
    text-align: left;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    font-weight: 600;
    font-size: ${props => props.theme.textSizeTextS};
`;
