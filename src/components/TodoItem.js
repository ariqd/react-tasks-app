import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button";

const TodoItem = ({ todo, deleteTask, toggleIsEdit }) => {
  return (
    <Todo>
      <p>{todo.title}</p>
      <div>
        <Button
          text="Edit"
          variant="success"
          action={() => toggleIsEdit(todo.id, todo.title)}
        />
        <Button
          text="Delete"
          variant="warning"
          action={() => deleteTask(todo.id)}
        />
      </div>
    </Todo>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;

const Todo = styled.div`
  background-color: #2da4f8;
  color: white;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  justify-content: space-between;
  margin: 0.5rem 0;
`;
