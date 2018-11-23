// External libraries
import styled from 'styled-components';

const PageDiv = styled.div`
  background: white;
  color: ${(props) => (props.theme.black)};
`;

const InnerPage = styled.div`
  max-width: ${(props) => (props.theme.maxWidth)};
  margin: 0 auto;
  padding: 2rem;
`;

export {
  PageDiv,
  InnerPage,
}
