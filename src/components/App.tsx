import { useState } from "react";
import { UsersTable } from "./UsersTable";
import { UserInfo } from "./UserInfo";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <>
      <h1>{"List from server 👓"}</h1>
      <p>hello</p>

      <div style={{ display: "flex", gap: "10px",  }}>
        <UsersTable
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />

        <div style={{flexGrow: 1}}>
          {selectedUserId && <UserInfo userId={selectedUserId} />}
        </div>
      </div>
    </>
  );
}

export default App;
