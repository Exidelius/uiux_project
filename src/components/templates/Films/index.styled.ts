import styled from 'styled-components';

export const Films = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    justify-content: center;
   
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 10px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 10px;
        margin: 0px 0px;
        width: 100%;
    }
`;


export const Title = styled.header`
    letter-spacing: 4px;
    font-weight: 600;
    display: flex;
    flex-direction: center;
    width: 100%;
    margin: 10px 0px;
    justify-content: center;
    
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
`;

export const List = styled.div`
    display: row;
    width: 80%;
    align-items: center;
    align-self: center;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 

    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        width: 100%;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr ;
        width: 110%;
    }
`;