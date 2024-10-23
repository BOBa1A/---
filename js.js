fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Преобразуем ответ в JSON
    .then(data => {
        console.log(data); // Выводим данные в консоль

        // Получаем таблицу для вставки данных
        const tableBody = document.querySelector("#userTable tbody");

        // Цикл для добавления данных о каждом пользователе в таблицу
        data.forEach(user => {
            // Создаём новую строку
            const row = document.createElement("tr");

            // Создаём ячейку для имени пользователя
            const nameCell = document.createElement("td");
            nameCell.textContent = user.name;

            // Создаём ячейку для email пользователя
            const emailCell = document.createElement("td");
            emailCell.textContent = user.email;

            // Добавляем ячейки в строку
            row.appendChild(nameCell);
            row.appendChild(emailCell);

            // Добавляем строку в тело таблицы
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

    // Переменная для отслеживания состояния
let isChanged = false;

// Добавляем обработчик события на кнопку
document.getElementById("changeButton").addEventListener("click", function() {
    if (!isChanged) {
        // Изменение текста абзацев
        document.getElementById("paragraph1").textContent = "Текст первого абзаца изменён!";
        document.getElementById("paragraph2").textContent = "Теперь это второй абзац с новым текстом.";
        document.getElementById("paragraph3").textContent = "Третий абзац также был изменён.";
        document.getElementById("phon").textContent = "Пример изменения текста, цвета и фона";

        // Изменение цвета текста
        document.getElementById("paragraph1").style.color = "red";
        document.getElementById("paragraph2").style.color = "green";
        document.getElementById("paragraph3").style.color = "blue";
        document.getElementById("phon").style.color = "white"

        // Изменение фона страницы
        document.body.style.backgroundColor = "black";
    } else {
        // Возврат текста абзацев к исходному
        document.getElementById("paragraph1").textContent = "Это первый абзац. Нажми кнопку, чтобы изменить его.";
        document.getElementById("paragraph2").textContent = "Это второй абзац. Он также изменится после клика.";
        document.getElementById("paragraph3").textContent = "Третий абзац тоже изменится при клике на кнопку.";
        document.getElementById("phon").textContent = "Пример изменения текста, цвета и фона";

        // Возврат цвета текста к исходному
        document.getElementById("paragraph1").style.color = "black";
        document.getElementById("paragraph2").style.color = "black";
        document.getElementById("paragraph3").style.color = "black";
        document.getElementById("phon").style.color = "black"

        // Возврат фона страницы к исходному
        document.body.style.backgroundColor = "white";
    }

    // Переключение состояния
    isChanged = !isChanged;
});