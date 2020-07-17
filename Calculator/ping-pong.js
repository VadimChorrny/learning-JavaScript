
// Создание функции отображения шарика
function circle (pos_x, pos_y, radius, color) {
    // Назначение цвет круга
    ctx.fillStyle = color;
    // Начала рисования
    ctx.beginPath(); 
    // Рисуем круг
    ctx.arc(pos_x, pos_y, radius, 0, Math.PI*2, true); 
    // Закрашиваем круг
    ctx.fill();
}
 
// Создание функции отображения блока
function block (pos_x, pos_y, width, height, color) {
    // Назначаем цвет для блока
    ctx.fillStyle = color;
    // Рисуем блок
    ctx.fillRect(pos_x, pos_y, width, height);
    // Переменные для позиции шарика
let x_circle = 30, y_circle = 250;
// Переменные для направления шарика
let move_right = true, move_top = true;
 
// Переменные для размера блока
let y_block = 200, height_block = 100;
 
// счёт
let score = 0;

// Запускаем обработчик события нажатия клавиш
document.addEventListener('keydown', function(event) {
    if (event.code == "ArrowDown" && y_block + height_block !== 500) {
        y_block += 5;
    } else if (event.code == "ArrowUp" && y_block != 0) {
        y_block -= 5;
    }
});// Удаление всего с поля
ctx.clearRect(0, 0, 800, 500);
 
// Проверка что шарик столкнулся с блоком
if (y_circle >= y_block && y_circle <= y_block + height_block && x_circle == 725) {
    // Меняем направление шарика
    move_right = false;
    // Увеличиваем счёт
    score++;
