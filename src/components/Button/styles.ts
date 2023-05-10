import { styled, css } from 'styled-components';
import { ButtonBase } from './Button';
import chroma from 'chroma-js';

const CustomButton = styled(ButtonBase)`
  background-color: ${(props) => (props.color ? props.color : '#4dabf7')};
  color: #fff;
  font-size: 12px;
  padding: 10px 20px;
  width: fit-content;
  border-radius: ${(props) => (props.pill ? '2em' : '10px')};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 20px
      ${(props) =>
        chroma(props.color ?? '#4dabf7')
          .darken(1)
          .css()};
    border: 1.8px solid
      ${(props) =>
        chroma(props.color ?? '#4dabf7')
          .darken(0.1)
          .css()};
  }
  ${(props) =>
    props.type === 'ghost' || props.type === 'outlined'
      ? css`
          background: #fff !important;
          color: ${props.color
            ? `${props.color} !important`
            : '#000 !important'};
          &:hover {
            box-shadow: none !important;
          }
        `
      : undefined}

  ${(props) =>
    props.type === 'outlined'
      ? css`
          border: 1px solid ${props.color};
        `
      : undefined}
`;

export { CustomButton };
