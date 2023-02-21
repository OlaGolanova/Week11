# Week11
Привет) Это ответы на теоретические вопросы

### Вопросы 💎

1. Сколько детей (дочерних DOM-узлов) у элемента `<ul>` в примере ниже:
    
    ```jsx
    <ul>
        <li>Привет</li>
        <li>Мир</li>
    </ul>
    <!-- ```       // 2 дочерних элемента
    
2. Есть такой элемент: `<input id= "input" value = "Привет">`. Какой вызов поменяет значение в нём?

input.setAttribute('value' , 'Добрый день')


let input = document.getElementById('input').value;
document.getElementById('input').value = "Добрый день"; // Добрый день


3. Сколько потомков будет у `<div>` после кода ниже?
    
    ```jsx
    <div id="div"></div>
    <p id="p">Привет</p>
    
    <script>
      div.append(p);
      div.append(p);
    </script>                // 1 потомок
    ```
    
4. В каких случаях для элемента elem не верно `elem.firstChild == elem.lastChild`?
- Когда у elem два или более потомков


5. Какое свойство задает класс элемента?
class

6. Для чего используется запись: `setAttribute(name, value)`?

Устанавливает значение(value) атрибута (name) у элемента. Например img.setAttribute('src', 'https://...')

7. Назовите метод добавления текста к документу.
text.Content
element.text.Content = 'привет';

Можно вместе с разметкой через inner.HTML
elem.inner.HTML = '<div> Привет </div>;

Через метод append

let div = document.createElement("div")
div.append("Какой-то текст")

console.log(div.textContent) // "Какой-то текст"

Метод Element.append() вставляет узлы или строки с текстом в конец Element. Строки с текстом вставляются как текстовое содержимое.

8. Как получить HTML-содержимое DOM-элемента elem?

elem.innerHTML

9. Что такое объект события и какие у него могут быть свойства?
Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

button.onclick = function(event){
}
у функции обработчика есть параметр event-это обьект события, который содержит информацию о произошедшем событии и о кликнутом элементе
10. Что такое BOM и DOM?
BOM -Объектная модель браузера -браузер и встроенные в него функции для работы с ним.
DOM - обьектная модель документа, фактически файл с которым мы работаем, файл с HTML разметкой. Документ,через который осуществляется доступ к содержимому страницы.

11. Есть вот такая страница:
    
    ```html
    <!DOCTYPE HTML>
    <html>
    
    <body>
    	<form name="search">
    		<label>Поиск:
    			<input type="text" name="search"> </label>
    		<input type="submit" value="Search!"> </form>
    	<hr>
    	<form name="search-person">Поиск по посетителям:
    		<table id="age-table">
    			<tr>
    				<td>Возраст:</td>
    				<td id="age-list">
    					<label>
    						<input type="radio" name="age" value="young">до 18</label>
    					<label>
    						<input type="radio" name="age" value="mature">18-50</label>
    					<label>
    						<input type="radio" name="age" value="senior">старше 50</label>
    				</td>
    			</tr>
    			<tr>
    				<td>Дополнительно:</td>
    				<td>
    					<input type="text" name="info">
    					<input type="text" name="info">
    					<input type="text" name="info"> </td>
    			</tr>
    		</table>
    		<input type="button" value="Search!"> </form>
    </body>
    
    </html>
    ```
    
    Как найти в ней:
    
    1. Таблицу с `id="age-table"` // let table = document.getElementById('age-table')
    2. Все элементы `label` **внутри** этой таблицы (их три) //   let label = document.querySelectorAll('#age-table label')
    3. Форму `form` с именем `name="search-person"`    //   let form = document.querySelector('form[name="search"]')


12. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?

document.querySelector('button').onclick = function() {
    document.querySelector('a').setAttribute("href", "https:/....");
}