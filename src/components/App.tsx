import { useState } from "react";
import { UsersTable } from "./UsersTable";
import { UserInfo } from "./UserInfo";
import "./styles/App.css";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  return (
    <>
      <h1>{"List from server 👓"}</h1>

      <div className="container">
        <div>
          <UsersTable
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            setIsLoadingTable={setIsLoadingTable}
            isLoadingTable={isLoadingTable}
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
