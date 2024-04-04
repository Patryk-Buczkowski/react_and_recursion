import { useEffect, useState } from "react";
import { getUserInfo } from "../Services/services";
import { User } from "../Types/types";
import generateNestedList from "./getListFunction";

type Prop = {
  userId: number;
};

export const UserInfo = ({ userId }: Prop) => {
  const [user, setUser] = useState<User | null>(null);
  const [list, setList] = useState<any | HTMLElement | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const userData = await getUserInfo(userId);
      setUser(userData);
    };

    loadData();

    const nestedList = generateNestedList(user);
    setList(nestedList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div style={{ border: "1px dotted black" }}>
      <h2>❔ USER INFO ❔</h2>
      {user && (
        <>
          <p>INFO OF USER {userId}</p>
          <div className="container">{list}</div>
        </>
      )}
    </div>
  );
};
