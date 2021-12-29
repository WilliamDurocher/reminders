import { allLists } from './index';
import { activeList, createList, createReminder, removeReminder, updateReminder, checkReminder } from './logic';


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

function setActiveList(list) {
    allLists.forEach((item, index) => {
        if (item.title === list.currentTarget.innerText) {
            item.active = true;
        } else {
            item.active = false;
        }
    });
    showReminders();
}

function showListHeader() {
    listNameActive.innerText = activeList().title;

}

function showReminders() {
    clearReminders();
    showListHeader();


    activeList().reminders.forEach((item, index) => {
        const reminder = document.createElement('label');
        reminder.classList.add('container');
        reminder.innerText = item.title;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', reminderCheckChange);
        checkbox.index = index;
        reminder.appendChild(checkbox);

        const checkIcon = document.createElement('span');
        checkIcon.classList.add('checkmark');
        reminder.appendChild(checkIcon);


        const editBtn = document.createElement('div');
        editBtn.classList.add('edit-reminder');
        editBtn.innerText = 'edit';
        editBtn.addEventListener('click', editReminderForm);
        editBtn.reminder = item;
        reminder.appendChild(editBtn);

        const removeBtn = document.createElement('div');
        removeBtn.classList.add('remove-reminder');
        removeBtn.innerText = 'remove';
        removeBtn.addEventListener('click', () => {
            removeReminder(index, item.title, item.dueDate, item.priority)
        });
        reminder.appendChild(removeBtn);

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
    createReminderBtn.removeEventListener('click', submitUpdateReminderForm);
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function editReminderForm(evt) {

    addReminderModalContainer.style.display = 'block';

    const reminder = evt.currentTarget.reminder;

    const updateReminderBtn = document.getElementById('add-reminder');
    updateReminderBtn.removeEventListener('click', submitReminderForm);
    updateReminderBtn.innerText = 'Update';
    reminderform.title.value = reminder.title;
    reminderform.due.value = reminder.dueDate;
    reminderform.priority.value = reminder.priority;
    updateReminderBtn.addEventListener('click', submitUpdateReminderForm);
    updateReminderBtn.reminder = reminder;
    

}

function submitReminderForm() {

    event.preventDefault();
    addReminderModalContainer.style.display = 'none';
    createReminder(reminderform.title.value, reminderform.due.value, reminderform.priority.value);
    reminderform.reset();

}

function submitUpdateReminderForm(evt){

    const title = reminderform.title.value;
    const dueDate = reminderform.due.value;
    const priority = reminderform.priority.value;

    event.preventDefault();
    updateReminder(evt.currentTarget.reminder, title, dueDate, priority);

    addReminderModalContainer.style.display = 'none';
    reminderform.reset();

}

//checkbox change function

function reminderCheckChange(evt){
    const index = evt.currentTarget.index;
    checkReminder(index, this);

}

// shared modal functions
addReminderModalClose.addEventListener('click', closeModal);
addListModalClose.addEventListener('click', closeModal);

function closeModal() {
    addReminderModalContainer.style.display = 'none';
    addListModalContainer.style.display = 'none';
    listform.reset();
    reminderform.reset();

}

window.onclick = function (event) {
    if (event.target == addReminderModalContainer || event.target == addListModalContainer) {
        closeModal();
    }
}



export { showLists, showListHeader, showReminders };