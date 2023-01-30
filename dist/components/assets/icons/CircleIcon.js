import styled from "styled-components";
import { TypeScale } from "../../utils/typography";
import { ColourShemes } from "../../utils/themes";
import { ReactComponent as CircleIcon } from "./circle.svg";

/**
 A styled CircleIcon component with fill color and size set through props.
@module StyledCircleIcon
@param {string} checkcolor - The color of the check icon. Defaults is green-300 fill color
@param {string} sizecheck -  The size of the check icon.Default is iconLarge size as defined in the ColourShemes and TypeScale utilities.
*/
export const StyledCircleIcon = styled(CircleIcon).attrs(props => ({
  fill: props.checkcolor || ColourShemes["green-300"],
  width: props.sizecheck || TypeScale.iconLarge
}))`
  fill: ${props => ColourShemes[props.checkcolor]};
  width: ${props => TypeScale[props.sizecheck]};
`;