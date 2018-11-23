// External libraries
import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

// Components
import Header from '../Header';
import Meta from '../Meta';

// Styled components
import { InnerPage, PageDiv } from './styles';

// Theme
const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageDiv>
          <Meta />
          <Header />
          <InnerPage>
            {this.props.children}
          </InnerPage>
        </PageDiv>
      </ThemeProvider>
    )
  }
}

export default Page;
