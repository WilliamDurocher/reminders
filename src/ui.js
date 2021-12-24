import { allLists } from './index';
import {activeList, createList, createReminder} from './logic';


const listContainer = document.querySelector('.group-card');
const listNameActive = document.querySelector('.main-header');
const remindersContainer = document.querySelector('.main-body');

const addReminderModalContainer = document.querySelector('.modal-add-reminder-container');
const addReminderModalClose = document.querySelector('.modal-add-reminder-close');



function showLists(){
    //clear lists
    allLists.forEach((item, index) => {
        const list = document.createElement('div');
        list.className = 'group-item';
        list.innerText = item.title;
        listContainer.appendChild(list);

    });
    const addListBtn = document.querySelector('.new-list');
    addListBtn.addEventListener('click', createList);

}

function clearLists(){
    listContainer.innerHTML = '';
}

function showListHeader(){
    //TODO: put list title in active reminders list
}

function showReminders(){
    clearReminders();
    listNameActive.innerText = activeList().title;


activeList().reminders.forEach((item, index) => {
    const reminder = document.createElement('label');
    reminder.classList.add('container');
    reminder.innerText = item.title;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    reminder.appendChild(checkbox);

    const checkIcon = document.createElement('span');
    checkIcon.classList.add('checkmark');
    reminder.appendChild(checkIcon);

    remindersContainer.appendChild(reminder);
    //TODO: generate reminders here, (title, date, completed status, etc)
})

const addReminderBtn = document.querySelector('.new-reminder');
addReminderBtn.addEventListener('click', newReminderForm);
}



function clearReminders(){
    remindersContainer.innerHTML = '';
}

//Add Reminder Modal functions and listeners

addReminderModalClose.addEventListener('click', closeModal);

function newReminderForm(){


    addReminderModalContainer.style.display = 'block';
    const createReminderBtn = document.getElementById('add-reminder');
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function submitReminderForm(){
 
        event.preventDefault();
        addReminderModalContainer.style.display = 'none';
        createReminder(form.title.value, form.due.value, form.priority.value);
        form.reset();
    
}
  
  function closeModal() {
    addReminderModalContainer.style.display = 'none';
  }
  
  window.onclick = function (event) {
    if (event.target == addReminderModalContainer) {
      closeModal();
    }
  }


    
export {showLists, showListHeader, showReminders};