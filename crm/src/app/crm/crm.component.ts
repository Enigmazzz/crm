import { Component } from '@angular/core';

interface Task {
  name: string;
  date: string;
  priority: string;
  status: string;
  }

interface User{
    idUser: number,
    userName: string,
    loginUser: string,
    passwordUser: string
  
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
public isHidden1: boolean=true
public registrationHidden: boolean=true
public exitButtonHidden: boolean=true
public actualTasks:Task[] = []
public currentStatus: string = 'wait';
public taskForm = document.getElementById('addik') as HTMLDivElement
public users: User[] = []
public iduserInput: number = 0;
public usernameInput: string =''
public loginuserInput: string = ''
public passworduserInput: string = ''
public aginPasswordUserInput: string = ''
public currentUser: User | null = null;
public registerUser(){
  
  if(this.usernameInput == '' || this.loginuserInput == '' || this.passworduserInput == '' ){
    alert('Заполните обязательные поля *')
  } if(this.passworduserInput !== this.aginPasswordUserInput){
    alert('Пароли не совпадают')
  }else{

    this.iduserInput = Math.floor(100000 + Math.random() * 900000);
    this.users.push({idUser: this.iduserInput, userName: this.usernameInput, 
    loginUser: this.loginuserInput, 
    passwordUser: this.passworduserInput})
    this.usernameInput = '' 
    this.loginuserInput = '' 
    this.passworduserInput = ''
    this.aginPasswordUserInput = ''
    localStorage.setItem('users', JSON.stringify(this.users))
    alert('Вы успешно зарегистрированны')
    console.log(this.users)
  }

  

}

public logout() {
  this.currentUser = null;
  this.loginuserInput = '';
  this.passworduserInput = '';
}

public autoriseUser() {
  if (!this.loginuserInput || !this.passworduserInput) {
    alert('Введите логин и пароль');
    return;
  }

  const storedUsers = localStorage.getItem('users');
  this.users = storedUsers ? JSON.parse(storedUsers) : [];

  const foundUser = this.users.find(user => user.loginUser === this.loginuserInput);

  if (foundUser) {
       if (foundUser.passwordUser === this.passworduserInput) {
      alert(`Добро пожаловать, ${foundUser.userName}!`);
      this.isHidden1 = true; 
     this.currentUser = foundUser;
    } else {
      alert('Неверный пароль');
    }
  } else {
    alert('Пользователь с таким логином не найден');
  }

  this.loginuserInput = '';
  this.passworduserInput = '';
}



public addTask(){

const inputElement=document.getElementById('inpCreate') as HTMLInputElement
const li=document.getElementById('li') as HTMLLIElement
const dateElement = document.getElementById('taskDate') as HTMLInputElement
const priorTask = document.getElementById('selecti') as HTMLSelectElement
const deleteButton = document.createElement('button')
const newZayavki = document.getElementById('NewZayavki') as HTMLButtonElement
const statusSelect = document.createElement('select') as HTMLSelectElement
const addChangeButton = document.createElement('button') as HTMLButtonElement
const actualZayavki = document.getElementById('ActualZayavki') as HTMLButtonElement
const closeZayavki = document.getElementById('CloseZayavki') as HTMLButtonElement
const deleteList = document.getElementById('deleteList') as HTMLButtonElement
const createZayavka=document.getElementById('CreateZayavki') as HTMLButtonElement
statusSelect.innerHTML=`<option value="done">Выполнено</option>
  <option value="wait" selected>Ожидает</option>
  <option value="not_done">Не выполнено</option>
  <option value="postponed">Отложено</option>
  <option value="cancelled">В процессе</option>
  <option hidden=true value="delete">Удалено</option>`
  
createZayavka.addEventListener('click', () => {
  if(
     statusSelect.value === "done" || 
     statusSelect.value === "not_done"||
     statusSelect.value === "delete"|| 
     statusSelect.value === "cancelled"|| 
     statusSelect.value === "postponed" ||
     statusSelect.value === "wait"
    ){
newLi.hidden=true 
   newDate.hidden=true}
})

addChangeButton.id='statusSelect'
addChangeButton.textContent='Сохранить'
addChangeButton.addEventListener('click', () => {
if(statusSelect.value === "not_done" || 
     statusSelect.value === "postponed" || 
     statusSelect.value === "cancelled"|| 
     statusSelect.value === "done")
  {
   newLi.hidden=true 
   newDate.hidden=true
  }

})

actualZayavki.addEventListener('click', () => {
if(
     statusSelect.value === "postponed" || 
     statusSelect.value === "cancelled"){
newLi.hidden=false 
   newDate.hidden=false
     }else
  {
   newLi.hidden=true 
   newDate.hidden=true
  }

})

closeZayavki.addEventListener('click', () => {
if(
     statusSelect.value === "done" || 
     statusSelect.value === "not_done"){
newLi.hidden=false 
   newDate.hidden=false
     }else
  {
   newLi.hidden=true 
   newDate.hidden=true
  }

})

newZayavki.addEventListener('click', () => {
if(
     statusSelect.value === "wait" ){
newLi.hidden=false 
   newDate.hidden=false
     }else
  {
   newLi.hidden=true 
   newDate.hidden=true
  }

})



deleteList.addEventListener('click', () => {
  if(statusSelect.value === "delete" ){
newLi.hidden=false 
   newDate.hidden=false} else{
    newLi.hidden=true 
   newDate.hidden=true
   }
})

// addChangeButton.addEventListener('click', () => {

// if(statusSelect.value === "not_done" || 
//      statusSelect.value === "postponed" || 
//      statusSelect.value === "cancelled"|| 
//      statusSelect.value === "done")
//   {
//     console.log('zaebis');
//   }

// const task: Task = {
//   name: inputElement.value,
//   date: dateElement.value ,
//   priority: priorTask.value,
//   status: statusSelect.value,
// }
// this.actualTasks.push(task)
// })

inputElement.style.margin='0%';
inputElement.style.paddingRight='20%';

deleteButton.textContent='🗑️'
deleteButton.id='deleter'
deleteButton.style.marginLeft ='60%';                                        
deleteButton.style.padding = '0.5% 1%'; 
deleteButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
deleteButton.style.borderStyle= 'hidden';
deleteButton.style.borderRadius= '5px';
deleteButton.style.fontWeight= '500';

deleteButton.addEventListener('click', () => {
  if (newCheck.checked){
    statusSelect.value = 'delete' 
    newLi.hidden=true 
   newDate.hidden=true
   newCheck.checked=false
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
    
     newLi.appendChild(newPrior);  
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


