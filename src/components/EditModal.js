import styled, { keyframes } from "styled-components";
import Button from "./Button";

const EditModal = ({ toggleIsEdit, data, editTask, updateTask }) => {
  return (
    <ModalContainer>
      <ModalBox>
        <h3>Edit Task</h3>
        <input type="text" value={data.title} onChange={editTask} />
        <ModalButtons>
          <Button variant="primary" text="Submit" action={updateTask} />
          <Button variant="warning" text="Cancel" action={toggleIsEdit} />
        </ModalButtons>
      </ModalBox>
    </ModalContainer>
  );
};

export default EditModal;

const animate = keyframes`
    from {
        top: -100px;
    }

    to {
        transform: translate(-50%, -50%);
    }
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  width: 40%;
  height: 10rem;
  background: white;
  position: absolute;
  top: 40%;
  left: 50%;
  padding: 35px;
  text-align: center;
  transform: translate(-50%, -50%);
  animation: ${animate};
  animation-duration: 0.8s;

  h3 {
    color: #2da4f8;
  }

  input {
    width: 80%;
    height: 2rem;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
  }
`;

const ModalButtons = styled.div`
  margin-bottom: 1rem;
`;
