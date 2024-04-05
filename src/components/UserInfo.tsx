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
  const [isLoadingList, setIsLoadingList] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoadingList(true);
        setUser(null);
        const userData = await getUserInfo(userId);
        setUser(userData);
      } catch (error) {
        throw new Error(`${error} ups...`);
      } finally {
        setIsLoadingList(false);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    if (user) {
      const nestedList = generateNestedList(user);
      setList(nestedList);
    }
  }, [user]);

  return (
    <div style={{ border: "1px dotted black" }}>
      <h2>❔ USER INFO ❔</h2>
      {isLoadingList && <p>Loading....</p>}
      {user && (
        <>
          <p>INFO OF USER {userId}</p>
          <div className="container">{list}</div>
        </>
      )}
    </div>
  );
};
