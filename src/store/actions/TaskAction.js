export const Add = (title) => {
  return {
    type: "ADD",
    payload: title,
  };
};

export const Delete = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const Update = (task) => {
  return {
    type: "UPDATE",
    payload: task,
  };
};
