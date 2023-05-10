import StackBase from './Stack';
import { styled } from 'styled-components';

const CustomStack = styled(StackBase)`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  flex: 1;
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')}
  gap: 1em;
`;

export { CustomStack };
