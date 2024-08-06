var form=document.querySelector('#form');
var itemList=document.querySelector('#item-list');

form.addEventListener('submit',addItem)
function addItem(e){

   e.preventDefault();
   var Input=document.getElementById('item');

// prevent empty input
   if(Input.value===''){
       alert('Please enter a value');
       return;
   }

   //new elements
   var li=document.createElement('li');
   var button=document.createElement('button');
   var span=document.createElement('span');

   //add list style
   li.classList.add('list-style');
   button.classList.add('delete-btn');
   span.classList.add('item-span');
 
   

   li.appendChild(span)
   li.appendChild(button);


   span.textContent=Input.value;
   button.textContent='Delete';

   itemList.appendChild(li);
   
   button.addEventListener('click',removeItem)

   function removeItem(e){
    var li= e.target.parentElement;
    itemList.removeChild(li);
   }
   
   Input.value='';

}


