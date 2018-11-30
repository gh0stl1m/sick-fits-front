// External libraries
import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

// Components
import Header from '../Header';
import Meta from '../Meta';

// Styled components
import { InnerPage, PageDiv } from './styles';

// Router events
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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

// Global styles
injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: 10px;
  }
  html: {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body: {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`

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
