import { ReactNode } from "react";

function generateNestedList(
  obj: any,
  parentElement?: HTMLElement | null
): ReactNode {
  let items: ReactNode[] = [];

  for (let key in obj) {
    let itemContent = `${key}: ${obj[key]}`;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nestedList = generateNestedList(obj[key]);
      items.push(
        <li key={key}>
          {key}
          {nestedList}
        </li>
      );
    } else {
      items.push(<li key={key}>{itemContent}</li>);
    }
  }

  return <ul>{items}</ul>;
}

export default generateNestedList;
