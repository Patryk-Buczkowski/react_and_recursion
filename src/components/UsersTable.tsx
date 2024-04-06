import { useEffect, useState } from "react";
import { User } from "../Types/types";
import { getUsers } from "../Services/services";

type Props = {
  isLoadingTable: boolean;
  selectedUserId: number | null;
  setSelectedUserId: (selectedUserId: number | null) => void;
  setIsLoadingTable: (boolean: boolean) => void;
};

export const UsersTable = ({
  selectedUserId,
  isLoadingTable,
  setSelectedUserId,
  setIsLoadingTable,
}: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const loadDataUsers = async () => {
      try {
        setIsLoadingTable(true);
        const loadUsers = await getUsers();
        setUsers(loadUsers);
      } catch (error) {
        throw new Error(`${error} ups...`);
      } finally {
        setIsLoadingTable(false);
      }
    };

    loadDataUsers();
  }, [setIsLoadingTable]);

  const thead = (
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>E-MAIL</th>
        <th>SELECT</th>
      </tr>
    </thead>
  );

  if (users !== null && users.length === 0) {
    return <p>No users available 😢</p>
  }

  return (
    <>
      {isLoadingTable && <p>User Table loading...</p>}
      <table>
        {users && thead}
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user.id} style={{ textAlign: "center" }}>
                <td>{user.id}</td>
                <td>
                  {selectedUserId === user.id ? (
                    <strong>{user.name}</strong>
                  ) : (
                    user.name
                  )}
                </td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedUserId(
                        selectedUserId === user.id ? null : user.id
                      );
                    }}
                    type="button"
                  >
                    🎈 SELECT 🎈
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
