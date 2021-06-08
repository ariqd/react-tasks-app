import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import TodoItem from "../components/TodoItem";
import FormInput from "../components/FormInput";
import EditModal from "../components/EditModal";
// import { AuthContext } from "../context/auth";
// import { Redirect } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://api-nodejs-todolist.herokuapp.com";

function App() {
  // const { isAuthenticated } = useContext(AuthContext);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Membaca buku",
  //   },
  //   {
  //     id: 2,
  //     title: "Menulis novel",
  //   },
  //   {
  //     id: 3,
  //     title: "Belanja online",
  //   },
  // ]);

  useEffect(() => {
    getData();
  }, []);

  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: "",
  });

  const getData = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${baseUrl}/task`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    setTodos(res.data.data);

    console.log(res);
  };

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

  const openEditModal = (id, data) => {
    setIsEdit(true);

    setEditData({
      id,
      title: data,
    });
  };

  const closeEditModal = () => setIsEdit(false);

  // if (!isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <h3>Task List</h3>
      </Logo>
      <div className="list">
        {todos.length > 0
          ? todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                deleteTask={deleteTask}
                toggleIsEdit={openEditModal}
              />
            ))
          : "No data"}
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
