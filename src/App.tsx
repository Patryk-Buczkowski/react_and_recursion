import { useState } from 'react';
import { UsersTable } from './components/UsersTable';
import { UserInfo } from './components/UserInfo';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(1);

  return (
    <>
      <h1>{'List from server 👓'}</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <UsersTable
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />

        <UserInfo userId={selectedUserId} />
      </div>
    </>
  );
}

export default App;
