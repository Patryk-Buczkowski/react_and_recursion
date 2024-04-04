import { useState } from "react";
import { UsersTable } from "./components/UsersTable";
import { UserInfo } from "./components/UserInfo";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <>
      <h1>{"List from server 👓"}</h1>

      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div >
          <UsersTable
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />
        </div>

        <div style={{flexGrow: 1}}>
          {selectedUserId !== null && <UserInfo userId={selectedUserId} />}
        </div>
      </div>
    </>
  );
}

export default App;
