export const getTodos = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );
};
export const getUsers = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
};

export const getUserInfo = async (userId: number) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((response) => response.json());
};
