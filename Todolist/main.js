const todoList = [
    'Đi siêu thị',
    'Đi chơi',
    'mua sắm quần áo',
    'Làm việc nhà'
];
   
let ul = document.createElement('ul');



let display = document.getElementsByTagName('body')[0].appendChild(ul);

(display.classList.contains('jumbotron'))?false:display.classList.add('jumbotron');
(display.classList.contains('container'))?false:display.classList.add('container');
display.classList.add('styleUl');

let index;

// Function render

function render(lists){
    let itemList = lists.map(
            item =>
            `
                <li>${item} <i class="fas fa-trash-alt" onclick = "removeItem(this)"></i>  <i class="fas fa-pencil-alt" onclick="editItems(this)"></i> </li>
            `

    ).join('');
    display.innerHTML = itemList;
   

    document.getElementById('new-item').addEventListener('click',addItem);

}
render(todoList);



function addItem(){
    let valueItem = document.getElementById('text-value');
    if(valueItem.value == ""){alert('Chưa có tên công việc')}
    else{
        todoList.push(valueItem.value);
        valueItem.value = '';
        
        render(todoList);
    }
}


// function delete item 

function removeItem(obj){

    for(let i =0; i < todoList.length; i++){
        if(todoList[i] == obj.parentNode.innerText){
            todoList.splice(i,1);
        }
    }

    console.log(obj.parentNode.innerText);

    render(todoList);
 
}


// function edit items 

function editItems(obj){
    let editText = document.getElementById('editItem');
    for(let i = 0; i< todoList.length;i++){
        if(todoList[i] == obj.parentNode.innerText){
            editText.value = todoList[i];
            editText.disabled = false;
            index =i;
        }
    }
    document.getElementById('button-save').addEventListener('click',saveItemHasEdit);
    return index;
}

// function save item has edit content

function saveItemHasEdit(){
    let editText = document.getElementById('editItem');
    for(let i = 0; i < todoList.length; i++){
        if(index == i){
            todoList[i] = editText.value;
        }
    }
    editText.disabled = true;
    render(todoList);
}

var pageHeight = window.innerHeight;

document.addEventListener('scroll', function(){
  document.body.scrollTop = 0;
});

document.addEventListener('wheel', function(e) {
  //console.log(e.deltaY);
  if(e.deltaY > 0) {
    scrollDown();
  } else {
    scrollUp();
  }
 }
);

function scrollDown() {
  document.body.style.transform = 'translate3d(0px, -'+ pageHeight + 'px, 0px)';
}

function scrollUp() {
  document.body.style.transform = 'translate3d(0px, 0px, 0px)';
}

