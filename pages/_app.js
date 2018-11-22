// External libraries
import App, { Container } from 'next/app'

// Components
import Page from '../components/Page';

class MainApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default MainApp;
