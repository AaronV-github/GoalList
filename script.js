

const AddButton=document.getElementById('AddButton');
const item=document.getElementById('item')
const list=document.getElementById('list')
const clearButton=document.getElementById('clear')

AddButton.addEventListener("click", AddItem);
clearButton.addEventListener("click", removeAll)

function AddItem(){

    if(item.value===""){
        alert('Your input is empty!');
    }

    else{
    let text=document.createTextNode(item.value);
    let li=document.createElement("li");
    li.appendChild(text);
    list.appendChild(li)
  
    }
    text.value=''; 
}

function removeAll(){
    list.innerHTML="";
}



