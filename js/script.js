// 1.  За допомогою createElement 
// 2.  Оприділяє позицію куди будемо добляти елемент
// beforebegin - перед відкриваючим тегом
// afterbegin - після відкриваючого тега
// beforeend - перед закриваючим
// afterend - після закриваючогр
// 3. За допомогою функції remove()

function displayList(arr, parent = document.body){
    const list = document.createElement('ul')
    for (const item of arr){
        const listItem = document.createElement('li')
        listItem.textContent = item
        list.appendChild(listItem)
    }

    parent.prepend(list)
}
displayList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv", 3])