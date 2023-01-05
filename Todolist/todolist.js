var popUp = document.querySelector('.addTaskPopUp')
const dark = document.querySelector('.darkness')
const taskNameInput = document.querySelector('.tasknameinput') 
const taskPlace = document.querySelector('.toDoListArea')


function addTask ()
{
if (popUp.style.display = 'none' )
{
    popUp.style.display = 'block'
    dark.style.display = 'block'
}



}

function closeTask()
{
    popUp.style.display = 'none'
    dark.style.display = 'none'
    taskNameInput.value = ''
    document.querySelector('.description').value = ''
   
}


function sendTask()
{ const task = taskNameInput.value 
    if (!task){
        alert('Adicione uma task')
        return;
    }else {
    //div task
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add('taskDiv')
    //color
    const taskAndColorDiv = document.createElement('div')
    taskAndColorDiv.classList.add('taskAndColorDiv')
    const color = document.querySelector('.getcolor').value
    const colorDiv = document.createElement("div")
    colorDiv.classList.add('colordiv')
    colorDiv.style.backgroundColor = color 

    //taskname
    const taskContent = document.createElement("input")
    taskContent.classList.add('taskcontent')
    taskContent.value = task
    taskContent.setAttribute('readonly', "")
    //input Div
    const inputArea = document.createElement('div')
    inputArea.classList.add ('inputArea')
    //buttons

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('buttonDiv')
        //textarea
  const textarea = document.createElement('textarea')
    textarea.classList.add('textAreaContent')
    textarea.setAttribute('maxlength', '54')
    textarea.setAttribute('readonly', '')
    const textAreaContent = document.querySelector('.description').value
    textarea.value = textAreaContent

    //edit button
     const editButton = document.createElement('input')
     editButton.setAttribute('type', 'image')
     editButton.setAttribute('src', 'assets/editbutton.png')
     editButton.classList.add ('editButton')



    editButton.addEventListener('click', () => {
        if (editButton.getAttribute('src') == 'assets/editbutton.png'){
        taskContent.removeAttribute('readonly')
        textarea.removeAttribute('readonly')
        taskContent.classList.remove('taskcontent')
        taskContent.focus()
        editButton.setAttribute('src', 'assets/savebutton.png')
    }else 
    {   
        taskContent.setAttribute('readonly', '')
        textarea.setAttribute('readonly', '')
        editButton.innerText = 'Edit'
        taskContent.classList.add('taskcontent')
        editButton.setAttribute('src', 'assets/editbutton.png')
    }
    } )
//delete
    const deleteButton = document.createElement('input')
    deleteButton.setAttribute('type', 'image')
    deleteButton.setAttribute('src','assets/deletebutton.png' )
    deleteButton.classList.add ('deletebutton')
    deleteButton.addEventListener('click', () => {
        taskPlace.removeChild(newTaskDiv)
     
    })
 // done
    const doneTaskArea =document.querySelector('.donetasks')

   const doneButton = document.createElement ('input')
   doneButton.setAttribute('type', 'image')
   doneButton.setAttribute('src', 'assets/Taskinfavcon.png')
   doneButton.classList.add("donebutton")
   doneButton.addEventListener('click', () =>{

   if (taskContent.style.textDecoration == 'line-through')
   {
            
       taskContent.style.textDecoration = 'none'
       doneButton.setAttribute('src', 'assets/Taskinfavcon.png')
       taskPlace.appendChild(newTaskDiv)
        doneTaskArea.removeChild(newTaskDiv)
    } else {
      
        taskContent.style.textDecoration = 'line-through'
        doneButton.setAttribute('src', 'assets/goback.png')
        taskPlace.removeChild(newTaskDiv)
        doneTaskArea.appendChild(newTaskDiv)
        deleteButton.addEventListener('click', () => {
            doneTaskArea.removeChild(newTaskDiv)
         
        })
    }
    
   
})
 
    taskAndColorDiv.appendChild(colorDiv)
    inputArea.appendChild(taskContent)
    inputArea.append(textarea)
    taskAndColorDiv.appendChild(inputArea)
    newTaskDiv.appendChild(taskAndColorDiv)
    buttonDiv.appendChild(doneButton)
    buttonDiv.appendChild(editButton)
    buttonDiv.appendChild(deleteButton)
    newTaskDiv.appendChild(buttonDiv)
    taskPlace.appendChild(newTaskDiv)
 
}

    closeTask()
    taskNameInput.value= ''
    document.querySelector('.description').value = ''
   
    
   
    


}

