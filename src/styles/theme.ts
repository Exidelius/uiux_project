import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#292b2f",
  backgroundColorDown: "#494b4f",
  textColor: "#F0ECE5",
  textGenreColor: "#F0ECE5",
  infoIconColor: "#2D2F34",
  iconColor: "#27292D",
  accentColor1: "rgba(192,0,10,0.9)",
  accentColor2: "rgba(192,0,10,0.9)",
  shadowColor: "rgba(0,0,0,1)",

  textSizeTitle: "40px",
  textSizeTitle900: "35px",
  textSizeTitle700: "35px",
  textSizeTitle500: "35px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "30px",
  textSizeTextM900: "25px",
  textSizeTextM700: "20px",
  textSizeTextM500: "20px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "#F4F4F4",
  backgroundColorDown: "#E2E2E2",
  textColor: "#101C17",
  textGenreColor: "#F0ECE5",
  infoIconColor: "#FAFAFA",
  iconColor: "white",
  accentColor1: "rgba(192,0,10,0.9)",
  accentColor2: "rgba(192,0,10,0.9)",
  shadowColor: "rgba(0,0,0,1)",

  textSizeTitle: "40px",
  textSizeTitle900: "35px",
  textSizeTitle700: "35px",
  textSizeTitle500: "35px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "30px",
  textSizeTextM900: "25px",
  textSizeTextM700: "20px",
  textSizeTextM500: "20px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background: linear-gradient(${(props) => props.theme.backgroundColor}, ${(props) => props.theme.backgroundColorDown});
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
