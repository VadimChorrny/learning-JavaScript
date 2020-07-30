// Theme: Function

// ОБЯВЛЕННЯ ФУНКЦІЇ ВИГЛЯДАЄ ТАК

function showMessage() { // сюда можна пихать аргументи
    alert( 'Всім привіт!' );
  }

// Тепер нашу функцію можна викликати коли нам потрібно

// Приклад

function showMessage() {
    alert( 'Всім привіт!' );
  }
  
  showMessage();
  showMessage();

  // Локальна перемінна

  function showMessage() {
    let message = "Привіт, я JavaScript!"; // локальная переменная
  
    alert( message );
  }
  
  showMessage(); // Привет, я JavaScript!
  
  alert( message ); // ця херь тепер буде ігнориться ібо вона записана не в локалке

  // Глобальна перемінна

let userName = 'Вася'; // це глобальна переміна і вона тепер як функція її можна визивати

function showMessage() {
  let message = 'Привіт, ' + userName;
  alert(message);
}

showMessage(); // Привет, Вася

// перемінні from i txt 

function showMessage(from, text) {

    from = '*' + from + '*'; // немного украсим "from"
  
    alert( from + ': ' + text );
  }
  
  let from = "Аня";
  
  showMessage(from, "Привет"); // *Аня*: Привет
  
  // значение "from" осталось прежним, функция изменила значение локальной переменной
  alert( from ); // Аня

  // return значення

  function sum(a, b) {
    return a + b;
  }
  
// SIMPLE APP

  let result = sum(1, 2);
  alert( result ); // 3

  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }
  
  let age = prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }

// Вибір назви функції
// Зазвичай якщо функція щось виводить її називають show..
// "get…" – вертають значення,
// "calc…" – щось вираховують,
// "create…" – щось створюють,
// "check…" – щось перевіряє.