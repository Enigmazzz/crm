import { Component } from '@angular/core';
interface Task {
  name: string;
  date: string;
  priority: string;
  status: string;
  }
@Component({
  selector: 'app-crm',
  standalone: false,
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
public result = history
public history: string[] = []
public text: string=''
public isHidden: boolean=true
public actualTasks:Task[] = []
public currentStatus: string = 'wait';

 
public addTask(){

const inputElement=document.getElementById('inpCreate') as HTMLInputElement
const li=document.getElementById('li') as HTMLLIElement
const dateElement = document.getElementById('taskDate') as HTMLInputElement
const priorTask = document.getElementById('selecti') as HTMLSelectElement
const deleteButton = document.createElement('button')
const newZayavki = document.getElementById('NewZayavki') as HTMLButtonElement
const statusSelect = document.createElement('select') as HTMLSelectElement
const addChangeButton = document.createElement('button') as HTMLButtonElement



statusSelect.innerHTML=`<option value="done">Выполнено</option>
  <option value="wait" selected>Ожидает</option>
  <option value="not_done">Закрыто</option>
  <option value="postponed">Отложено</option>
  <option value="cancelled">В процессе</option>`

addChangeButton.innerHTML=`<button  id="statusSelect"> Сохранить </button>`
addChangeButton.addEventListener('click', () => {

if(statusSelect.value === "not_done" || 
     statusSelect.value === "postponed" || 
     statusSelect.value === "cancelled"|| 
     statusSelect.value === "done")
  {
    console.log('zaebis');
  }

const task: Task = {
  name: inputElement.value,
  date: dateElement.value ,
  priority: priorTask.value,
  status: statusSelect.value,
}
this.actualTasks.push(task)
})

const task: Task = {
  name: inputElement.value,
  date: dateElement.value ,
  priority: priorTask.value,
  status: statusSelect.value,
}
this.actualTasks.push(task)




inputElement.style.margin='0%';
inputElement.style.paddingRight='20%';

deleteButton.textContent='Удалить'
deleteButton.id='deleter'
deleteButton.style.marginLeft ='60%';                                        
deleteButton.style.padding = '0.5% 1%'; 
deleteButton.style.backgroundColor = 'rgb(195, 236, 236)';
deleteButton.style.borderStyle= 'hidden';
deleteButton.style.borderRadius= '5px';
deleteButton.style.fontWeight= '500';

deleteButton.addEventListener('click', () => {
  if (newCheck.checked){
 li.removeChild(newLi);
      li.removeChild(newDate);
      li.removeChild(newPrior);
  }
})
this.history.push(inputElement.value + inputElement.value) 
inputElement.value = ' '
  
const newLi = document.createElement('li');
      newLi.textContent = this.history[this.history.length - 1]; 

const newCheck = document.createElement('input');
      newCheck.type = 'checkbox';
      newCheck.classList.add('check');

const newDate =document.createElement('input')
newDate.type = 'date'
newDate.value = dateElement.value

const newPrior = document.createElement('span')

if(priorTask.value=='Выберите приоритет'){
  newPrior.textContent=''
} else{
newPrior.textContent = priorTask.value
}

newZayavki.addEventListener('click', () => 
  { 
    li.appendChild(newPrior)
  newLi.appendChild(newCheck);
      li.appendChild(newLi);
li.appendChild(newDate)
newLi.appendChild(deleteButton)
newLi.appendChild(addChangeButton)
newLi.appendChild(statusSelect)


} )





console.log(this.actualTasks)

}

}


