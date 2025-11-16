let some:unknown;
some = 'Text';

// 1. Приведення типу

let str: string;
str = some as string;

// 2. Додавання перевірки

// let str: string;
// if (typeof some === "string") {
//   str = some;
// }

export {};