const email = "example@domain.com";

// Знаходимо позицію символу "@"
const atIndex = email.indexOf("@");

// Витягуємо ім'я (частина до "@")
const name = email.slice(0, atIndex);

// Витягуємо домен (частина після "@")
const domain = email.slice(atIndex + 1);

// Виводимо результати в консоль
console.log(`Name: ${name}`);  // Наприклад, "example"
console.log(`Domain: ${domain}`);  // Наприклад, "domain.com"



