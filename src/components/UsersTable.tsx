import { useEffect, useState } from 'react';
import { User } from '../Types/types';
import { getUsers } from '../Services/services';

type Props = {
  selectedUserId: number;
  setSelectedUserId: (selectedUserId: number) => void;
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
    <table style={{ width: '50%' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>E-MAIL</th>
          <th>SELECT</th>
        </tr>
      </thead>
      <tbody>
        {users?.map(user => {
          return (
            <tr key={user.id} style={{textAlign: 'center'}}>
              <td>{user.id}</td>
              <td>
                {selectedUserId === user.id ? (
                  <strong>{user.username}</strong>
                ) : (
                  user.username
                )}
              </td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedUserId(user.id);
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
