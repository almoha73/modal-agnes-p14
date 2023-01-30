/**
GlobalStyle component from 'styled-components' library
@module GlobalStyle
*/

import { createGlobalStyle } from "styled-components";
import { ColourShemes } from "./themes";
import { primaryFont } from "./typography";

/**
A styled-component for applying global styles to the application
@constant
@type {createGlobalStyle}
@property {Object} body - Styles for the body element
csharp
 - background: color set by the selected color pallet from ColourShemes
csharp
 - font-family: set by the primary font in primaryFont
*/

const GlobalStyle = createGlobalStyle`

*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body { 
    background: ${ColourShemes["green-500"]};
    font-family: ${primaryFont};
  }
`;
export default GlobalStyle;