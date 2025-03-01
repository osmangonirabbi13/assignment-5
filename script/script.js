// button 01 task completed
document.getElementById('btn1').addEventListener('click' , function(event){
    event.preventDefault
    alert('board updated successfully')
    const task = parseInt(document.getElementById('task-count').innerText);
    console.log(task)
    const Completed = parseInt(document.getElementById('task-completed').innerText);
    document.getElementById('task-completed').innerText= Completed + 1;
    // console.log(typeof Completed)
    if (task > 0) {
        document.getElementById('task-count').innerText = task - 1;
    }else{
        document.getElementById('task-count').innerText = 0;
    }

    const history = document.getElementById("task-history");

    const p = document.createElement("div");
  
    
  
    p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 5px; margin-bottom: 15px;");
  
    p.innerText =  'you have completed the tack Fix Mobile Button Issue';
  
    history.appendChild(p);
  
   const btn1= document.getElementById('btn1')
   btn1.setAttribute("disabled" , "true");
  
  
  
})