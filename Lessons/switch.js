// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// learn JavaScript swift

function Numbers(){

let arg = prompt("Enter numbers:");

switch (arg) { // пихаєм сюда перемінну в нашому випадку це variable arg
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}
}

function Browser(){

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }
}

// Task First: 

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//     alert('Вы ввели число 0');
//   }
  
//   if (number === 1) {
//     alert('Вы ввели число 1');
//   }
  
//   if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
//   }

const number = +prompt('Enter number vid 0 do 3' , '');

switch(number){
    case '0':
        case '1':
          alert( 'Один или ноль' );
          break;
      
        case '2':
          alert( 'Два' );
          break;
      
        case 3:
          alert( 'Три' );
          break;
        default:
          alert( 'Неизвестное значение' );
      }