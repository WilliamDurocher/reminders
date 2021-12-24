import { allLists } from './index';
import { activeList, createList, createReminder } from './logic';


const listContainer = document.querySelector('.group-card');
const listNameActive = document.querySelector('.main-header');
const remindersContainer = document.querySelector('.main-body');

const addReminderModalContainer = document.querySelector('.modal-add-reminder-container');
const addReminderModalClose = document.querySelector('.modal-reminder-close');

const addListModalContainer = document.querySelector('.modal-add-list-container');
const addListModalClose = document.querySelector('.modal-list-close');



function showLists() {
    clearLists();
    allLists.forEach((item, index) => {
        const list = document.createElement('div');
        list.className = 'group-item';
        list.innerText = item.title;
        listContainer.appendChild(list);

        list.addEventListener('click', setActiveList);

    });
    const addListBtn = document.querySelector('.new-list');
    addListBtn.addEventListener('click', newListForm);

}

function clearLists() {
    listContainer.innerHTML = '';
}

function setActiveList(list){
    allLists.forEach((item, index) => {
        if (item.title === list.currentTarget.innerText){
            item.active = true;
        }else{
            item.active = false;
        }
    });
    showReminders();
}

function showListHeader() {
    //TODO: put list title in active reminders list
}

function showReminders() {
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

function clearReminders() {
    remindersContainer.innerHTML = '';
}


//Add List Modal function and listeners
function newListForm() {
    addListModalContainer.style.display = 'block';
    const createListBtn = document.getElementById('add-list');
    createListBtn.addEventListener('click', submitListForm)

}

function submitListForm() {

    event.preventDefault();
    addListModalContainer.style.display = 'none';
    allLists.forEach((item, index) => {
        item.active = false;

    })
    createList(listform.title.value);
    listform.reset();

}

//Add Reminder Modal functions and listeners
function newReminderForm() {
    addReminderModalContainer.style.display = 'block';
    const createReminderBtn = document.getElementById('add-reminder');
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function submitReminderForm() {

    event.preventDefault();
    addReminderModalContainer.style.display = 'none';
    createReminder(reminderform.title.value, reminderform.due.value, reminderform.priority.value);
    reminderform.reset();

}


// shared modal functions


addReminderModalClose.addEventListener('click', closeModal);
addListModalClose.addEventListener('click', closeModal);

function closeModal() {
    addReminderModalContainer.style.display = 'none';
    addListModalContainer.style.display = 'none';

}

window.onclick = function (event) {
    if (event.target == addReminderModalContainer || event.target == addListModalContainer) {
        closeModal();
    }
}



export { showLists, showListHeader, showReminders };