import { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import TodoItem from "./components/TodoItem";
import FormInput from "./components/FormInput";
import EditModal from "./components/EditModal";
import { useSelector, useDispatch } from "react-redux";
import { Add, Delete, Update } from "./store/actions/TaskAction";

function App() {
  const todos = useSelector((state) => state.tasks.todos);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const [editData, setEditData] = useState({
    id: "",
    title: "",
  });

  const deleteTask = (id) => {
    dispatch(Delete(id));
  };

  const addTask = (data) => {
    dispatch(Add(data));
  };

  const editTask = (e) => {
    setEditData({ ...editData, title: e.target.value });
  };

  const updateTask = () => {
    dispatch(Update(editData));
    setIsEdit(false);
    setEditData({
      id: "",
      title: "",
    });
  };

  const openEditModal = (id, data) => {
    setIsEdit(true);

    setEditData({
      id,
      title: data,
    });
  };

  const closeEditModal = () => {
    setIsEdit(false);
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <h3>Task List with Redux</h3>
      </Logo>
      <div className="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTask={deleteTask}
            toggleIsEdit={openEditModal}
          />
        ))}
      </div>
      <div className="formInput">
        <FormInput addTask={addTask} />
      </div>
      {isEdit && (
        <EditModal
          toggleIsEdit={closeEditModal}
          editTask={editTask}
          data={editData}
          updateTask={updateTask}
        />
      )}
    </Container>
  );
}

export default App;

const Container = styled.section`
  width: 40%;
  margin: 0 auto;
  height: 100vh;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  img {
    width: 100px;
  }

  h3 {
    color: #2da4fd;
  }
`;
