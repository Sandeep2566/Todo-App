let todoList = [{item: 'Do study',dueDate: '30/12/2024'},{item: 'solve questions',dueDate: '30/12/2024'}];
displayItems();


function addTodo(){
  let inputElement = document.querySelector('#search1');
  let dateElement = document.querySelector('#search2');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem,dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}
function displayItems(){
let containerElement = document.querySelector('.container');
let newHtml ='';
for( let i = 0; i<todoList.length; i++){
  let item = todoList[i].item;
  let dueDate = todoList[i].dueDate;
  newHtml += `
  
  <span>${item}</span>
   <span>${dueDate}</span>
  <button class='delete' onclick="todoList.splice(${i},1);
  displayItems();">Delete</button>
  `;
   
}
containerElement.innerHTML = newHtml;
}