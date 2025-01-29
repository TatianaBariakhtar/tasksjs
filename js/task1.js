
// __________________Задачі ___________________
// const name = "Тетяна";
// console.log (name);
// const age = 39;
// console.log (`Мені ${age} років`);

// const x = 10;
// const y = 5;
 
// const a1 = x + y;
// const a2 = x - y;
// const a3 = x * y;
// const a4 = x / y;
// const a5 = x % y;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// _______________Лекція 1.2________________


// _____________________Перетворення явне________________
// console.log(Number(`5`));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(`Jacob`));
// console.log(Number(`25px`));


// _______________________Перетворення неявне__________________
// console.log ("5" * 2);
// console.log ("10" - 5);
// console.log (5 + true);
// console.log ("5" - true);
 
// console.log ("25" * true);
// console.log ("25" * true - true * false);
// console.log (5 + null);
// console.log ("5" + null);

// const userAge = 15;
// const isAdult = userAge >= 18;
// console.log(isAdult);



// ____________________оператори булеві і арифметичні_______________
// console.log (5 > 4);
// console.log (10 > `7`);
// console.log (`2` > `12`);
// console.log (`a` > `d`);
// console.log (97 > 100);
// console.log (`5` > `a`);
// console.log (Number ("5") > Number ("a"));


// ___________________Строга і нестрога рівність ___________________

// console.log (`4` == 4);
// console.log (`6` === 6);
// console.log (`false` === false);
// console.log (1 == true);
// console.log (1 === true);
// console.log (`0` == false);
// console.log (`0` === false);
// console.log (`Papaya` < `papaya`);
// console.log (`Papaya` === `papaya`);

// console.log (undefined == null);
// console.log (undefined === null);

// ____________________Робота з числами. Приведення до числа. Явне і неявне________________
// const x = Number (`5`);
// console.log (x);


// const x = + `5`;
// console.log (x);

// _______________Унарний плюс____________

// // const y = `5`;
// const x = + y;
// // const x = Number (y);
// console.log (x);

// const y = `5pi`;
// const x = Number(y);
// console.log(x);

// const y = `5pi`;
// const x = +y;
// console.log(x);


// const y = `5124.55pi`;
// const x = Number.parseInt(y);
// console.log(x);


// const y = `5124.55pi`;
// const x = Number.parseFloat(y);
// console.log(x);

// ______________prompt______________

// let elementWidth = prompt (`Enter Width`);
// let elementWidth = prompt("Enter Width"); 


// const temp = 7;
// if (temp > 20) {
// console.log (`Спекотно`);
// }  
// else if (temp > 10) {
// console.log (`Нормально`);   
// }
// else if (temp > 0) {
// console.log (`Прохолодно`);    
// }
// else {
// console.log (`холодно`)    
// }
// debugger;


// ___________________задача з жпт________________

// function checkAvailability(quantity, stock) {
//     if (quantity <= stock) {
//         return `Order successful!`;
//     }
//     else {
//       return `Not enough stock!`;
//     }
// }
// console.log(checkAvailability(5, 10)); // "Order successful!"
// console.log(checkAvailability(12, 8)); // "Not enough stock!"



// ___________________задача з жпт 2________________
// function calculateDiscount(price, discount) {
//     // Перевірка, чи знижка в межах від 0 до 100
//     if (discount < 0 || discount > 100) {
//         return "Invalid discount!";
//     }
    
//     // Обчислення нової ціни після знижки
//     const discountedPrice = price - (price * discount / 100);
    
//     return `Price after discount: ${discountedPrice} credits`;
// }

// // Приклади викликів функції:
// console.log(calculateDiscount(1000, 20)); // "Price after discount: 800 credits"
// console.log(calculateDiscount(1000, -5)); // "Invalid discount!"
// console.log(calculateDiscount(1000, 105)); // "Invalid discount!"
// console.log(calculateDiscount(1000, 50)); // "Price after discount: 500 credits"



// ___________________задача з жпт 3________________

// function checkAge(age) {
//     if (age >= 18) {
//         return `Welcome!`;
//     }
//     else {
//         return `Access denied!`;
//     }
// }
// console.log(checkAge(20)); // "Welcome!"
// console.log(checkAge(16)); // "Access denied!"

// // ___________________задача з жпт 4________________
// function calculateChange(totalCost, payment) {
//     if (totalCost > payment) {
//         return `Not enough money!`;
//     }
//     const difference = payment - totalCost;
//     return `Your change is ${difference} credits`;
// }

// console.log(calculateChange(300, 500)); // "Your change is 200 credits"
// console.log(calculateChange(600, 400)); // "Not enough money!"

// ___________________задача з жпт 5________________
// function checkTemperature(temp) {
//     if (temp < 0) {
//         return `Cold`;
//     }
//     else if (temp > 0 && temp <= 25) {
//         return `Warm`;
//     }
//     else {
//         return `Hot`;
//     }

// }
// console.log(checkTemperature(-5)); // "Cold"
// console.log(checkTemperature(20)); // "Warm"
// console.log(checkTemperature(30)); // "Hot"



// ___________________задача з жпт подібна до  дз 2 -2_______________

// function capitalizeMessage(message) {
//     if (message.length === 0) return message;  // Перевірка на порожній рядок
//     if (message.charAt(0) === message.charAt(0).toUpperCase()) return message;  // Якщо перша літера вже велика
//     return message.charAt(0).toUpperCase() + message.slice(1);  // Перетворюємо першу літеру на велику
//   }
  
//   console.log(capitalizeMessage("hello"));  // "Hello"
//   console.log(capitalizeMessage("Hello"));  // "Hello"
//   console.log(capitalizeMessage("javaScript"));  // "JavaScript"
//   console.log(capitalizeMessage(""));  // ""

// ___________________задача з жпт подібна з лонгріду теми об'єкти_______________
// const pantry = {
//     apples: 5,
//     bread: 2,
//     milk: 1,
//     eggs: 12,
//   };
  
//   // Завдання:
//   1. Використовуючи Object.keys(), отримай масив ключів (назв продуктів).
//   2. Перебери масив ключів за допомогою for...of і запиши кількість кожного продукту у масив values.
//   3. Виведи масив ключів (keys) і масив значень (values) у консоль.
  
//   Очікуваний результат:
//   keys: ["apples", "bread", "milk", "eggs"]  
//   values: [5, 2, 1, 12]
// _________________-рішення ________________
// const pantry = {
//         apples: 5,
//         bread: 2,
//         milk: 1,
//         eggs: 12,
//       };
//       const keys = Object.keys(pantry);
//       const values = [];
//       for (const key of keys) {
//         values.push(pantry[key]);
//       }
//       console.log(keys); 
//       console.log(values); 
//  ___________________задача з жпт подібна з лонгріду теми об'єкти 2_______________
// const books = {
//     "To Kill a Mockingbird": "Harper Lee",
//     "1984": "George Orwell",
//     "The Great Gatsby": "F. Scott Fitzgerald",
//     "Moby Dick": "Herman Melville",
//   };
  
//   // Завдання:
//   1. Використовуючи Object.keys(), отримай список назв книг (ключів).
//   2. За допомогою циклу for...of отримай список авторів (значень) і запиши їх у масив values.
//   3. Виведи масив назв книг (keys) і масив авторів (values) у консоль.
// const books = {
//        "To Kill a Mockingbird": "Harper Lee",
//        "1984": "George Orwell",
//        "The Great Gatsby": "F. Scott Fitzgerald",
//        "Moby Dick": "Herman Melville",
//       };

//       const keys = Object.keys (books);
//       const values = [];
//       for (const key of keys) {
//         values.push(books[key]);
//       }
//       console.log(keys);
//       console.log(values);


//  ___________________задача з жпт подібна з лонгріду теми об'єкти 3_______________
// Використай метод Object.values() для отримання масиву значень об'єкта та підрахуй їх кількість.
// function countValues(object) {
//     // Поверни кількість значень у об'єкті
//   }
  
//   // Приклади виклику:
//   console.log(countValues({})); // 0
//   console.log(countValues({ name: "Mango", age: 2 })); // 2
//   console.log(countValues({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
// ____________________Рішення___________________  

// function countValues(object) {
//     const keys = Object.keys(object);
//   return keys.length;  
// }
//   console.log(countValues({})); // 0
//   console.log(countValues({ name: "Mango", age: 2 })); // 2
//   console.log(countValues({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3





//   ___________________задача з жпт подібна з лонгріду теми об'єкти 4_______________

//   Задача 1: Обчислення середнього віку
// Функція calculateAverageAge(ages) приймає об'єкт, в якому ключі — це імена людей, а значення — їхні віки. Напишіть функцію, яка обчислює середній вік усіх людей.

// Поради:

// Використовуйте метод Object.values(), щоб отримати масив віків.
// Знайдіть суму всіх віків і поділіть на кількість людей.


// __________________________ріщення підказав жпт, бо було складно_____________________

// function calculateAverageAge(ages) {
//     const ageValues = Object.values(ages); // Отримуємо масив віків
//     let totalAge = 0;
  
//     for (let i = 0; i < ageValues.length; i++) {
//       totalAge += ageValues[i]; // Додаємо кожен вік до загальної суми
//     }
  
//     // Повертаємо середній вік
//     return totalAge / ageValues.length;
//   }
  

//   console.log(calculateAverageAge({ john: 30, mary: 25, anna: 35 }));  // 30
//   console.log(calculateAverageAge({ alex: 45, kate: 210 }));            // 
//   console.log(calculateAverageAge({}));                                 // 0


//  ___________________задача з жпт подібна з лонгріду теми об'єкти 5______________
  
// Функція calculateTotalPrice(products) приймає об'єкт, де ключі — це назви товарів, а значення — їхні ціни. Напишіть функцію, яка повертає загальну суму всіх товарів.

// Поради:

// Використовуйте метод Object.values() для отримання масиву цін.
// Пройдіться по кожній ціні і додайте її до змінної, що тримає загальну суму.

// _________________________Рішення підказка жпт ___________________________

// function calculateTotalPrice(products) {
//     // Отримуємо масив значень (цін товарів) з об'єкта
//     const prices = Object.values(products);
  
//     // Ініціалізуємо змінну для загальної суми
//     let totalPrice = 0;
  
//     // Проходимо по кожній ціні та додаємо її до загальної суми
//     for (const price of prices) {
//       totalPrice += price;
//     }
  
//     // Повертаємо загальну суму
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice({ apple: 1.2, banana: 0.8, orange: 1.5 })); // 3.5
//   console.log(calculateTotalPrice({ bread: 2, milk: 1.5 })); // 3.5
//   console.log(calculateTotalPrice({})); // 0

//  ___________________задача з жпт подібна з лонгріду теми об'єкти 6______________

// Задача 1: Обчислити загальну кількість товарів
// Створіть функцію calculateTotalQuantity(products), яка приймає об'єкт, де ключі — це назви товарів,
//  а значення — кількість цих товарів. Функція повинна повернути загальну кількість товарів.
// _________________Рішення_____________________

// function calculateTotalQuantity(products) {
//     const quantities = Object.values(products);
//     let totalQuantity = 0;
//     for (const quantity of quantities) {
//         totalQuantity +=quantity;
//     }
//     return totalQuantity;
// }
// console.log(calculateTotalQuantity({ apple: 16, banana: 22, orange: 8 }));


//  ___________________задача з жпт подібна з лонгріду теми об'єкти 7______________


// Ось подібна задача:

// Задача: Напишіть функцію calculateTotalPrice, яка приймає об'єкт products, де ключі — це назви товарів, 
// а значення — їхні ціни. Функція має повернути загальну суму вартості всіх товарів.

// _________________рішення______________-
// function calculateTotalPrice (products) {
//     const prises = Object.values(products);
//     let totalPrice = 0;
//     for (const price of prises) {
//         totalPrice += price;
//     }
//     return totalPrice;
// }
// console.log(calculateTotalPrice({ apple: 144, banana: 352, orange: 18 }));


class User {
    constructor(params) {
      this.name = params.name;
      this.email = params.email;
    }
  
  //   getEmail() {
  //     return this.email;
  //   }
  
  //   changeEmail(newEmail) {
  //     this.email = newEmail;
  //   }
  // }
  
  // const mango = new User({ 
  //     name: "Mango", 
  //     email: "mango@mail.com" 
  // });
  
  // console.log(mango.getEmail());  // “mango@mail.com”

  console.log('This message will not appear in the console');

cos value = 5;




  
  


  












  





























