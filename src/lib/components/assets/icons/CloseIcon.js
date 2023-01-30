import styled from "styled-components";
import { TypeScale } from "../../utils/typography";
import { ReactComponent as CloseIcon } from "./xmark-solid.svg";
import { ColourShemes } from "../../utils/themes";


/**
A component that wraps the close icon imported from './xmark-solid.svg' using 'styled-components'.
@module StyledCloseIcon
@param {string} closecolor - The color of the close icon. Default is green-300 from the ColourShemes.
@param {string} sizeclose - The size of the close icon. Default is header4 from the TypeScale.
*/
export const StyledCloseIcon = styled(CloseIcon).attrs((props) => ({
  fill: props.closecolor || ColourShemes["green-300"],
  width: props.sizeclose || TypeScale.header4,
}))`
  fill: ${(props) => ColourShemes[props.closecolor]};
  width: ${(props) => TypeScale[props.sizeclose]};
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;


