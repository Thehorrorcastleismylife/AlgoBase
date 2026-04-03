const mainSection = document.getElementById('mainContainer')
const SHOW = document.getElementById('show')
let countPractice = 1;
function createAnswerElement(text) {
    const btn = document.createElement('button')
    const spanInBtn = document.createElement('span')
    spanInBtn.textContent = `Задание ${countPractice}`
    btn.classList.add('btn-answer')
    mainSection.appendChild(btn)
    btn.appendChild(spanInBtn)
    countPractice += 1;

    // создается кнопка и в ней текст с номером задания, countPractice нужен чтобы при добавлении добавлялась единица к заданию
}

document.addEventListener('DOMContentLoaded', () => {
    createAnswerElement("fasfds")
})
SHOW.addEventListener('click',() => {
    fetch('temp_content.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = 
                    '<pre>' + data + '</pre>';
            })
            .catch(error => console.error('Ошибка:', error));
})
