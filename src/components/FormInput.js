import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const FormInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (task !== "") {
      addTask(task);
    }

    setTask("");
  };

  return (
    <Form>
      <input
        type="text"
        placeholder="Type in your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button text="Add" variant="primary" action={(e) => submitForm(e)} />
    </Form>
  );
};

export default FormInput;

const Form = styled.form`
  background-color: white;
  color: white;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  justify-content: space-between;
  margin: 0.5rem 0;

  input {
    width: 70%;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;
