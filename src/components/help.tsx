import { ReactNode } from 'react';

// Funkcja rekurencyjna do generowania listy HTML na podstawie zagnieżdżonych obiektów
function generateNestedList(obj: any, parentElement?: HTMLElement | null): ReactNode {
    // Tworzenie elementu <ul> dla aktualnego poziomu
    let items: ReactNode[] = [];

    // Iteracja przez klucze obiektu
    for (let key in obj) {
        // Tworzenie elementu <li> dla klucza i wartości
        let itemContent = `${key}: ${obj[key]}`;

        // Jeśli wartość klucza jest obiektem, wywołujemy funkcję rekurencyjnie dla tej wartości
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const nestedList = generateNestedList(obj[key]);
            items.push(<li key={key}>{nestedList}</li>);
        } else {
            items.push(<li key={key}>{itemContent}</li>);
        }
    }

    // Tworzenie elementu <ul>
    return <ul>{items}</ul>;
}

export default generateNestedList;
