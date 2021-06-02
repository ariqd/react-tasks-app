import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ text, variant, action }) => {
  return <Btn className={variant} onClick={action}>{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default Button;

const Btn = styled.button`
  color: white;
  width: 5rem;
  height: 1.5rem;
  margin: 0 0.2rem;
  border: none;

  &.success {
    background-color: #00a44e;
  }

  &.warning {
    background-color: #ff2060;
  }

  &.primary {
    background-color: #089c99;
  }

  &:hover {
    cursor: pointer;
  }
`;
