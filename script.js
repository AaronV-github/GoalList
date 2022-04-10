const quotes=["Don't ever give up!",
"You can overcome anything!",
"The sky is the limit!",
"You can achieve anything if you put in the work!",
"It's hard at first but it gets easier if you keep going",
"Don't be afraid of challeneg!",
"Make sure you stretch before taking on hard tasks",
"Don't compare yourself to others!",
"Don't let no one stopping you achieving your goals!",
"Every small step counts",
"Keep going even if it feels impossible!",
"You got this!",
]

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



