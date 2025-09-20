// Завдання 1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().


// let number = prompt("Введіть число:");
// number = Number(number);

// if (number === 10) {
//     alert("Вірно");
// } else {
//     alert("Невірно");
//

// Завдання 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// let message="";
// if (min >= 0 && min <= 14) {
//   message = `${min} входить в першу чверть`;
// } else if (min >= 15 && min <= 29) {
//   message = `${min} входить в другу чверть`;
// } else if (min >= 30 && min <= 44) {
//   message = `${min} входить в третю чверть`;
// } else if (min >= 45 && min <= 59) {
//   message = `${min} входить в четверту чверть`;
// }

// alert(message);



// Звдання 4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const userMinutes = Number(prompt('Введіть кількість хвилин'));

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, "0");

//   const minutes = totalMinutes % 60;
//   const modifiedMinutes = String(minutes).padStart(2, "0");

//   return `${modifiedHours}:${modifiedMinutes}`;
// }

// console.log(formatTime(userMinutes));



// Завдання 7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sumEven = 0; 
//   for (let i = max; i >= min; i--) {
//     console.log(i); 
//     if (i % 2 === 0) {
//       sumEven += i; 
//     }
//   }

//   return sumEven; 
// }

// console.log(getNumbers(1, 10)); 




// Задача 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }
//   return a < b ? a : b;
// }







