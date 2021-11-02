"use strict";                                 // это установка, которая заставляет код обрабатываться в строгом режиме. 

// console.log(44/0);                          // виходить Infinity
// console.log('string' * 9);                     // NaN тому що різні типи данних

// const person = `string`;

// const bool = true;

// // console.log(somehing);                        // null тому що somehing немає ніде

// let und;
// console.log(und);                                // тут undefined



// // console.log(obj.name);                          // такий спосіб 
// console.log(obj['name']);                          // і такий але якщо ми берем в [] то без крапки в скобки
  
 
// const obj = {                                     // тут ми створили ОБ'ЄКТ 
//     name: "Ruslan",                               // де name, age, isMarried є СВОЙСТВА ОБ'ЄКТА
//     age: 24,                                      // а "Ruslan", 24, false ЗНАЧЕННЯ СВОЙСТВА
//     isMarried: false                              // name, age, isMarried являються ключами до Значень
// };


// let arr =['bla.bla', 'pam.pam', '6', 'imf.gpg'];       // array(масив) тут ключів немає, тому що   
// console.log(arr[2]);                                   // Array йдуть в послідовному порядку


// 1. Просте спілкування з користувачем

//  alert('hello');                                  // alert - вибиває вікно де тільки Ок

// const result = confirm('Are you here?');          // confirm  - запитує, де є 2 варіанти відповіді.  
// console.log(result);                              // якщо ок нажали то true. Отмена то false
 
// // Якщо добавити перед prompt + то поміняється тип данних з string на number
// const answer = prompt('Вам є 18?', '18');        // prompt - вікно в якому вводиш данні '18'- задає варіант відповіді
// console.log(answer);                              // ІНФОРМАЦІЯ ЯКА ПРИХОДИТЬ ВІД КОРИСТУВАЧА БУДЕ У ВИГЛЯДІ STRING
                                                     // АЛЕ ЇЇ МОЖНА ЗМІНИТИ

// const answers = [];                                   // array

// answers[0] = prompt('Ваше імя?', '');                 // задає питання по порядку
// answers[1] = prompt('Ваша фамілія?', '');
// answers[2] = prompt('Скільки вам років?', '');

// console.log(typeof(answers));


// //  2. Интерполяция(ES6)

// // Приклад для того щоб знати що є такий
// const category1 = 'toys1';
// console.log('https://someurl.com/' + category1 + '/' + '5');


// // Приклад яким слід користуватись
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);          // Працює з такими кавичками `` 

// const user = 'Ruslan';
// alert(`Привіт, ${user}`);



// // 3.Оператори 

// console.log('arr' + ' - object');
// console.log( 6 + + ' 8');       //  другий + додає // другий + це унарний плюс, використовує один аргумент для роботи


// let incr = 10,
//     decr = 10;

// incr++;         // коли ставимо ++ оператори перед то нозиваються префиксними  
// decr--;         // якщо після то постфиксние

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);             // розділило на скільки можливо і вивело остаток 1


// // // одне = то це присвоєння
// console.log(2*4 == 8);        // два == порівнює 
// console.log(2 * (2 + 2) === '8');        // три === порівнює по типу даних

// // && оператор І          // Працює тоді коли два або більше значень являються правдивими
// // || оператор или        // Працює коли хотя б 1 значення правдиве 
// // ! оператор отрицание повертає значення в противоположне 
// // != не равен
// const isChecked = true,
//       isChlose = false;

//       console.log(isChecked && isChlose);


//       const isChecked1 = true,
//       isChlose1 = false;

//       console.log(isChecked1 || isChlose1);


// // 4. Git - система контроля версій, позволяє створювати точки отчота
// //    Git - програма для створення репозиторії
// //    GitHub - хранилище репозиторіїв
      
