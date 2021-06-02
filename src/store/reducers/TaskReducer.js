const initialState = {
  todos: [
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
  ],
};

const TaskReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      const newItem = {
        id: state.todos.length + 1,
        title: payload,
      };
      return {
        ...state,
        todos: [...state.todos, newItem],
      };
    case "DELETE":
      // setTodos(todos.filter((item) => item.id !== id));
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    case "UPDATE":
      const { id, title } = payload;
      const newData = { id, title };
      const newTodos = state.todos;
      newTodos.splice(id - 1, 1, newData);

      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};

export default TaskReducer;
