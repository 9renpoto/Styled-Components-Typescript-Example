import { StyledComponentClass } from "styled-components";
import styled, { IThemeInterface } from "../theme";

const Quote: StyledComponentClass<
  React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>,
  IThemeInterface,
  React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>
> = styled.h1`
  color: ${props => props.theme.primaryColor};
  font: 400 36px/1.4 "cardo";
  font-style: italic;
  font-weight: normal;
  text-align: left;
  text-indent: -10px;

  max-width: 800px;
  width: 80%;
  margin: 0 auto;
`;

export default Quote;
