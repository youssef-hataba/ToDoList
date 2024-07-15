let inputBox=document.getElementById('input-box');
let list=document.getElementById('list-container');

function addTask(){
    if(inputBox.value===''){
        swal("you must write something!");
    }else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

inputBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

list.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem('data',list.innerHTML);
}

function showTask(){
    list.innerHTML=localStorage.getItem('data');
}
showTask();