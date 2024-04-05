import { useEffect, useState } from "react";
import { User } from "../types/types";
import { getUsers } from "../services/services";

type Props = {
  selectedUserId: number | null;
  setSelectedUserId: (selectedUserId: number | null) => void;
};

export const UsersTable = ({ selectedUserId, setSelectedUserId }: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const loadDataUsers = async () => {
      const loadUsers = await getUsers();

      setUsers(loadUsers);
    };

    loadDataUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>E-MAIL</th>
          <th>SELECT</th>
        </tr>
      </thead>
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
  );
};
