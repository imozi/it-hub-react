export const jsCoreGuideData = [
  // ==================== 1. ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ ====================
  {
    id: 'string',
    name: 'String (Строка)',
    category: 'primitives',
    categoryName: 'Примитивные типы',
    description:
      'Текстовые данные. Заключаются в одинарные, двойные или косые (шаблонные) кавычки.',
    howToDefine: "typeof 'Текст' // возвращает 'string'",
    accessData:
      'Доступ к символам по индексу (str) или через свойство str.length.',
    codeExample: `const name = "Алексей";
const greeting = \`Привет, \${name}!\`; // Шаблонная строка

console.log(name); // "А" — первый символ
console.log(name.length); // 7 — длина строки`,
  },
  {
    id: 'number',
    name: 'Number (Число)',
    category: 'primitives',
    categoryName: 'Примитивные типы',
    description:
      'Целые числа и числа с плавающей точкой в диапазоне от -(2^53 - 1) до 2^53 - 1. Включает специальные значения: Infinity, -Infinity и NaN.',
    howToDefine: "typeof 42 // возвращает 'number'",
    accessData:
      'Используется напрямую в математических операциях и встроенных методах Math.',
    codeExample: `const price = 499.99;
const invalid = "текст" / 2; // NaN (Not a Number)

console.log(Number.isNaN(invalid)); // true — проверка на NaN`,
  },
  {
    id: 'bigint',
    name: 'BigInt (Большое число)',
    category: 'primitives',
    categoryName: 'Примитивные типы',
    description:
      'Используется для работы с целыми числами произвольной длины, которые выходят за безопасные пределы типа Number.',
    howToDefine: "typeof 9007199254740991n // возвращает 'bigint'",
    accessData:
      'Создается путем добавления буквы "n" в конец числа или через функцию BigInt(). Нельзя смешивать с Number напрямую.',
    codeExample: `const bigNumber = 123456789012345678901234567890n;
const parsedBig = BigInt("9007199254740991");

console.log(bigNumber + 2n); // Сложение возможно только с другими BigInt`,
  },
  {
    id: 'boolean',
    name: 'Boolean (Логический тип)',
    category: 'primitives',
    categoryName: 'Примитивные типы',
    description:
      'Принимает только два значения: true (истина) или false (ложь). Управляет логикой условий.',
    howToDefine: "typeof true // возвращает 'boolean'",
    accessData:
      'Используется в конструкциях if/else, тернарных операторах и логических И/ИЛИ.',
    codeExample: `const isLogged = true;
const hasAccess = isLogged && 20 > 18; // true

// Использование в React: {isLogged ? <Logout /> : <Login />}`,
  },
  {
    id: 'undefined',
    name: 'Undefined (Не определено)',
    category: 'primitives',
    categoryName: 'Примитивные типы',
    description:
      'Означает, что переменная была объявлена, но ей еще не присвоили никакого значения. Это значение по умолчанию в JS.',
    howToDefine: "typeof undefined // возвращает 'undefined'",
    accessData: 'Проверяется напрямую через строгое равенство (===).',
    codeExample: `let emptyField; 
console.log(emptyField); // undefined

console.log(emptyField === undefined); // true`,
  },
  {
    id: 'null',
    name: 'Null (Пустое значение)',
    category: 'primitives',
    categoryName: 'Примитивные типы',
    description:
      'Намеренное, явное указание на отсутствие какого-либо объекта или значения ("пустота").',
    howToDefine:
      "typeof null // возвращает 'object' (это официальная историческая ошибка JS)",
    accessData:
      'Так как typeof врет, проверяется исключительно через строгое равенство (variable === null).',
    codeExample: `let currentUser = null; // Пользователь пока не авторизован

if (currentUser === null) {
  console.log("Пожалуйста, войдите в систему");
}`,
  },
  {
    id: 'symbol',
    name: 'Symbol (Символ)',
    category: 'primitives',
    categoryName: 'Примитивные типы',
    description:
      'Уникальное и неизменяемое значение. Используется для создания скрытых, уникальных ключей и свойств внутри объектов.',
    howToDefine: "typeof Symbol('id') // возвращает 'symbol'",
    accessData:
      'Каждый созданный символ гарантированно уникален, даже если у них одинаковые описания.',
    codeExample: `const id1 = Symbol("userId");
const id2 = Symbol("userId");
console.log(id1 === id2); // false! Они уникальны

const user = {
  [id1]: "Скрытый ID сотрудника"
};`,
  },

  // ==================== 2. СЛОЖНЫЕ ТИПЫ И ИЗВЛЕЧЕНИЕ ДАННЫХ ====================
  {
    id: 'object',
    name: 'Object (Объект)',
    category: 'complex-types',
    categoryName: 'Сложные типы данных',
    description:
      'Главный сложный тип данных. Используется для хранения именованных коллекций в формате "ключ: значение".',
    howToDefine: "typeof {} // возвращает 'object'",
    accessData:
      'Через точку (obj.prop), квадратные скобки (obj["prop"]) или деструктуризацию (const {prop} = obj).',
    codeExample: `const user = { id: 1, login: "admin", role: "moderator" };

// 1. Через точку или скобки
console.log(user.login); // "admin"
console.log(user["role"]); // "moderator"

// 2. Деструктуризация (Мастхэв для React props и state!)
const { login, role } = user;
console.log(login); // "admin"`,
  },
  {
    id: 'array',
    name: 'Array (Массив)',
    category: 'complex-types',
    categoryName: 'Сложные типы данных',
    description:
      'Упорядоченная коллекция элементов (список). Технически является подтипом объекта, индексация строго с нуля.',
    howToDefine:
      'Array.isArray([]) // возвращает true (единственный верный способ проверки)',
    accessData:
      'По индексу (arr), через свойство .length, деструктуризацию или современный метод .at(-1).',
    codeExample: `const stack = ["HTML", "CSS", "React"];

// 1. По индексу и метод .at()
console.log(stack); // "HTML"
console.log(stack.at(-1)); // "React" (последний элемент)

// 2. Деструктуризация массива
const [first, second] = stack;
console.log(second); // "CSS"`,
  },

  // ==================== 3. ЛОГИЧЕСКИЕ КОНСТРУКЦИИ ====================
  {
    id: 'functions',
    name: 'Functions (Функции)',
    category: 'logic',
    categoryName: 'Управляющие конструкции и логика',
    description:
      'Именованные или анонимные блоки кода, которые можно вызывать повторно. Бывают декларативными и стрелочными.',
    howToDefine: "typeof function() {} // возвращает 'function'",
    accessData:
      'Вызываются круглыми скобками с передачей аргументов: myFunction(arg1, arg2).',
    codeExample: `// Стрелочная функция (основа функциональных компонентов в React)
const greet = (userName) => \`Привет, \${userName}!\`;

// Вызов функции
const message = greet("Даниил");
console.log(message); // "Привет, Даниил!"`,
  },
  {
    id: 'loops',
    name: 'Loops (Циклы)',
    category: 'logic',
    categoryName: 'Управляющие конструкции и логика',
    description:
      'Конструкции для многократного выполнения кода, пока условие истинно.',
    howToDefine: 'Синтаксические конструкции языка (не имеют типа в typeof)',
    accessData:
      'Используются для обхода массивов (for...of), свойств объектов (for...in) или работы по счетчику (for).',
    codeExample: `const items = ["Книга", "Ручка"];

// for...of — идеален для перебора значений массива
for (const item of items) {
  console.log(item);
}

// for...in — перебирает КЛЮЧИ (свойства) объектов
const box = { width: 10, height: 20 };
for (const key in box) {
  console.log(\`Ключ: \${key}, Значение: \${box[key]}\`);
}`,
  },

  // ==================== 4. МЕТОДЫ МАССИВОВ И ОСОБЕННОСТИ REACT ====================
  {
    id: 'react-array-methods',
    name: 'React-методы массивов (map, filter)',
    category: 'react-essential',
    categoryName: 'Критично для React',
    description:
      'Методы перебора, которые возвращают новые массивы. Критически важны для динамического рендеринга списков в React.',
    howToDefine: "typeof [].map // возвращает 'function'",
    accessData:
      'Применяются к массиву, внутри JSX преобразуют плоские данные в массив XML/JSX элементов.',
    codeExample: `// Внутри React компонента:
const fruits = ["Яблоко", "Банан", "Апельсин"];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);`,
  },
  {
    id: 'react-conditional-rendering',
    name: 'Условный рендеринг в React (&&, тернарный оператор)',
    category: 'react-essential',
    categoryName: 'Критично для React',
    description:
      'Способ показывать или скрывать интерфейс компонента в зависимости от условий (стейта или пропсов).',
    howToDefine: 'Базируется на логическом вычислении выражений в JS',
    accessData:
      'Использует логическое «И» (&&) для отображения/скрытия или тернарный оператор для выбора между двумя элементами.',
    codeExample: `// 1. Тернарный оператор (Условие ? Если true : Если false)
const Greeting = ({ isLogged }) => {
  return <div>{isLogged ? <h1>С возвращением!</h1> : <h1>Войдите в аккаунт</h1>}</div>;
};

// 2. Логическое «И» (Условие && Если true)
const Notification = ({ messages }) => {
  return <div>{messages.length > 0 && <p>У вас есть сообщения!</p>}</div>;
};

// 3. Быстрый возврат (Early return) из функции
if (!hasAccess) return <AccessDenied />;\nreturn <Dashboard />;`,
  },
];

export type JSCoreGuide = (typeof jsCoreGuideData)[number];
export type JSCoreGuideData = typeof jsCoreGuideData;
