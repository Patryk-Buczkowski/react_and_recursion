import { useEffect, useState } from 'react';
import { getUserTodos } from '../Services/services';
import { User } from '../Types/types';
import generateNestedList from './help';

type Prop = {
  userId: number;
};

export const UserInfo = ({ userId }: Prop) => {
  const [user, setUser] = useState<User | null>(null);
  const [list, setList] = useState<any | HTMLElement | null>(null);

  useEffect(() => {
    const loadData = async () => {
      getUserTodos(userId).then(setUser);

      setList(generateNestedList(user));
    };

    loadData();
  }, [user, userId]);

  return (
    <div style={{ border: '1px dotted black', width: '50%' }}>
      <h2>❔ USER INFO ❔</h2>
      <p>INFO OF USER {userId}</p>
      {user && (
        <>
          <p>USER ADDRESS</p>
          <div className="container">{list}</div>
        </>
      )}
    </div>
  );
};
