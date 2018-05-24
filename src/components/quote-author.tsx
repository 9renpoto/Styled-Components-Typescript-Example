import * as React from "react";
import { StyledComponentClass } from "styled-components";
import styled, { IThemeInterface } from "../theme";

export interface QuoteAuthorProps {
  className?: string;
}

class QuoteAuthor extends React.Component<QuoteAuthorProps, {}> {
  render() {
    return <div className={this.props.className}>—{this.props.children}</div>;
  }
}

const StyledQuoteAuthor: StyledComponentClass<
  QuoteAuthorProps,
  IThemeInterface,
  Pick<QuoteAuthorProps, "className"> & {
    theme?: IThemeInterface | undefined;
  }
> = styled(QuoteAuthor)`
  color: #fff;
  font: 400 36px/1.4 "cardo";
  margin: 20px 0;
  text-align: left;
  text-indent: -32px;
`;

export default StyledQuoteAuthor;
