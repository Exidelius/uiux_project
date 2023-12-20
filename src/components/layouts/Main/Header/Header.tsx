import Button from "@/components/common/Button/Button";
import React from "react";
import { BiBrightnessHalf } from "react-icons/bi";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.Img src="https://svgshare.com/i/10WV.svg"></Style.Img>
          <Style.Name>Aliance-Film</Style.Name>
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<BiBrightnessHalf />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
