/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem;
  constructor(rows) {
    this.elem = this['createTable'](rows);
    document.onclick = this.onClick.bind(this); 
  }

  createTable(users){
    let rows = "";
    for ( let user of users ) {
      rows += `<tr id="${user.name}"><td>${user.name}</td><td>${user.age}</td><td>${user.salary}</td><td>${user.city}</td><td><button>X</button></td></tr>`;
    }
    let html =  "<table><thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead>"
            + "<tbody>" + rows + "</tbody></table>";
    let e = document.createElement('html');
    e.innerHTML = html;
    return e;
  }

  onClick(event) {
    let tagName = event.target.tagName;
    if (tagName != 'BUTTON') {
      return;
    }
    let rowId = event.target.parentElement.parentElement.remove();
  }
}
