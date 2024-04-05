import { useState } from "react";
import { UsersTable } from "./components/UsersTable";
import { UserInfo } from "./components/UserInfo";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  return (
    <>
      <h1>{"List from server 👓"}</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <div>
          <UsersTable
            isLoadingTable={isLoadingTable}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            setIsLoadingTable={setIsLoadingTable}
          />
        </div>

        <div style={{ flexGrow: 1 }}>
          {selectedUserId && <UserInfo userId={selectedUserId} />}
        </div>
      </div>
    </>
  );
}

export default App;
