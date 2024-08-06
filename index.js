// your JavaScript file
/*const container = document.querySelector("#container");

const content=document.createElement('p');
content.classList.add('paragraph');
content.textContent='hey am red'

container.appendChild(content);


const header =document.createElement('h3');
header.classList.add('h3');
header.textContent='iam blue';

container.appendChild(header)


const div=document.createElement('div');
div.classList.add('div');
div.style.backgroundColor='pink';
div.style.height='100px';
div.style.width='100px';
div.style.border='1px solid black'

container.appendChild(div);

const p=document.createElement('p');
p.classList.add('p');
p.textContent='me to!';

div.appendChild(p);*/

/*const buttons=document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert(button.id);
    })
})*/


var button =document.querySelector('#delete');
var form=document.querySelector('#form');
var itemList=document.querySelector('#item-list');

form.addEventListener('submit',addItem)
function addItem(e){
   e.preventDefault();
   var Input=document.getElementById('item').value;

   

   //new elements
   var li=document.createElement('li');
   var button=document.createElement('button');
   var span=document.createElement('span');

   //append
   li.classList.add('li');
   li.style.listStyleType='none';
   li.style.backgroundColor='#fff';
   li.style.height='20px';
   li.style.width='100px';
   li.style.display='grid';
   li.style.gridTemplateColumns='80px 80px';
   
   button.classList.add('delete');
   button.style.border='1px solid green';
   

  
   li.appendChild(span)
   li.appendChild(button);

   span.textContent=Input;
   
   span.style.display='flex';
   span.style.justifyContent='center';

   span.style.alignContent='center';
   button.textContent='Delete';

   itemList.appendChild(li);
   
   button.addEventListener('click',removeItem)
   function removeItem(e){
    var li= e.target.parentElement;
    itemList.removeChild(li);
   }
   




   
   var Input='';



}


