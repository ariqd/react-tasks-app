import styled from "styled-components";

const Input = (props) => {
  return <MyInput {...props} />;
};

export default Input;

const MyInput = styled.input`
  width: "100%";
  border: none;
  border-bottom: 1px solid #57ae4f;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;
