// button 01 task completed
document.getElementById('btn1').addEventListener('click' , function(event){
    event.preventDefault
    alert('board updated successfully')
    const task = parseInt(document.getElementById('task-count').innerText);
    // console.log(task)
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
  
    p.innerText =  ` You have completed the tack Fix Mobile Button Issue at ${myTime()} `;
  
    history.appendChild(p);
  
   const btn1= document.getElementById('btn1')
   btn1.setAttribute("disabled" , "true");
  
  
  
})

// button 02 task completed

document.getElementById('btn2').addEventListener('click' , function(event){
    event.preventDefault
    alert('board updated successfully')
    const task = parseInt(document.getElementById('task-count').innerText);
    // console.log(task)
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
  
    p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 8px; margin-bottom: 15px;");
  
    p.innerText =  `You have completed the task Add Dark Mode ${myTime()}`;
  
    history.appendChild(p);
  
   const btn2= document.getElementById('btn2')
   btn2.setAttribute("disabled" , "true");
  
})

// button 03 task completed

document.getElementById('btn3').addEventListener('click' , function(event){
    event.preventDefault
    alert('board updated successfully')
    const task = parseInt(document.getElementById('task-count').innerText);
    // console.log(task)
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
  
    p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 8px; margin-bottom: 15px;");
  
    p.innerText =  `You have completed the task Optimize Home page ${myTime()}`;
  
    history.appendChild(p);
  
   const btn3= document.getElementById('btn3')
   btn3.setAttribute("disabled" , "true");
  
})

// button 04 task completed

document.getElementById('btn4').addEventListener('click' , function(event){
    event.preventDefault
    alert('board updated successfully')
    const task = parseInt(document.getElementById('task-count').innerText);
    // console.log(task)
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
  
    p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 8px; margin-bottom: 15px;");
  
    p.innerText =  `You have completed the task Add new emoji 🤲 ${myTime()}`;
  
    history.appendChild(p);
  
   const btn4= document.getElementById('btn4')
   btn4.setAttribute("disabled" , "true");
  
})

// button 05 task completed

document.getElementById('btn5').addEventListener('click' , function(event){
    event.preventDefault
    alert('board updated successfully')
    const task = parseInt(document.getElementById('task-count').innerText);
    // console.log(task)
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
  
    
  
    p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 8px; margin-bottom: 15px;");
  
    p.innerText =  `You have completed the task Integrate OpenAI API ${myTime()}`;
  
    history.appendChild(p);
  
   const btn5= document.getElementById('btn5')
   btn5.setAttribute("disabled" , "true");
  
})

// button 06 task completed

document.getElementById('btn6').addEventListener('click' , function(event){
    event.preventDefault
    alert('board updated successfully')
    alert('congrates!!! You have completed all the current task')
    const task = parseInt(document.getElementById('task-count').innerText);
    // console.log(task)
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
  
    
  
    p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 8px; margin-bottom: 15px;");
  
    p.innerText =  `You have completed the task Improve Job searching ${myTime()}`;
  
    history.appendChild(p);
  
   const btn6= document.getElementById('btn6')
   btn6.setAttribute("disabled" , "true");
  
})

const history = document.getElementById('clear-history').addEventListener('click' , function(event){
    event.preventDefault
    document.getElementById('task-history').innerHTML = '';
})

// blog click

document.getElementById('blogClick').addEventListener('click' , function(event){
    event.preventDefault
    location.href='blog.html'
})