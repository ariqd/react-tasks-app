import { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import TodoItem from "./components/TodoItem";
import FormInput from "./components/FormInput";
import EditModal from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Membaca buku",
    },
    {
      id: 2,
      title: "Menulis novel",
    },
    {
      id: 3,
      title: "Belanja online",
    },
  ]);

  const [isEdit, setIsEdit] = useState(false);

  const [editData, setEditData] = useState({
    id: "",
    title: "",
  });

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTask = (data) => {
    const id = todos.length;

    const newData = {
      id: id + 1,
      title: data,
    };

    setTodos([...todos, newData]);
  };

  const editTask = (e) => {
    setEditData({ ...editData, title: e.target.value });
  };

  const updateTask = () => {
    const { id, title } = editData;

    const newData = { id, title };

    const newTodos = todos;

    newTodos.splice(id - 1, 1, newData);

    setTodos(newTodos);
    setIsEdit(false);
    setEditData({
      id: "",
      title: "",
    });
  };

  // const toggleIsEdit = () => setIsEdit(!isEdit);

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
