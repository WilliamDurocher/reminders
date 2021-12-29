import { allLists } from './index';
import { activeList, createList, createReminder, removeReminder, updateReminder, checkReminder, removeList,
    updateList } from './logic';


const listsContainer = document.querySelector('.lists-container');
const activeListName = document.querySelector('.reminders-header-title');
const remindersContainer = document.querySelector('.reminders-container');

const reminderModalContainer = document.querySelector('.modal-reminder-container');
const reminderModalClose = document.querySelector('.modal-reminder-close');

const listModalContainer = document.querySelector('.modal-list-container');
const listModalClose = document.querySelector('.modal-list-close');



function showLists() {
    clearLists();
    allLists.forEach((item, index) => {
        const listContainer = document.createElement('div');
        listContainer.classList.add('list-container');
        const list = document.createElement('div');
        list.className = 'list';
        list.innerText = item.title;
        list.addEventListener('click', setActiveList);
        listContainer.appendChild(list);


     

        const editListBtn = document.createElement('div');
        editListBtn.classList.add('list-options-edit');
        editListBtn.innerText = 'Edit';
        editListBtn.addEventListener('click', editListForm);
        editListBtn.list = item;


        const removeListBtn = document.createElement('div');
        removeListBtn.classList.add('list-options-remove');
        removeListBtn.innerText = 'Del';
        removeListBtn.addEventListener('click', () => {
            removeList(index);
            showFirstList();
        });

           //options container

           const listOptionsContainer = document.createElement('div');
           listOptionsContainer.classList.add('list-options-container');

           listOptionsContainer.appendChild(editListBtn);
           listOptionsContainer.appendChild(removeListBtn);


        listContainer.appendChild(listOptionsContainer);


        listsContainer.appendChild(listContainer);

    });
    const addListBtn = document.querySelector('.new-list');
    addListBtn.addEventListener('click', newListForm);

}

function clearLists() {
    listsContainer.innerHTML = '';
}



//TODO: to use whenever a list is removed
function showFirstList(){
    allLists.forEach((item,index) => {
        if (index == 0){
            item.active = true;
        }else{
            item.active = false;
        }
    });
    showReminders();
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
    activeListName.innerText = activeList().title;

}
//Add List Modal function and listeners
function newListForm() {
    listModalContainer.style.display = 'block';
    const createListBtn = document.getElementById('add-list');
    createListBtn.removeEventListener('click', submitUpdateListForm);
    createListBtn.addEventListener('click', submitListForm);

}

function editListForm(evt){
    const list = evt.currentTarget.list;
    const editListBtn = document.getElementById('add-list');


    listModalContainer.style.display = 'block';
    listform.title.value = list.title;
    editListBtn.innerText = 'Update';
    editListBtn.removeEventListener('click', submitListForm);
    editListBtn.addEventListener('click', submitUpdateListForm)
    editListBtn.list = list;

}

function submitUpdateListForm(evt){

    listModalContainer.style.display = 'none';
    const title = listform.title.value;
    event.preventDefault();
    updateList(evt.currentTarget.list, title);

    listform.reset();

}
function submitListForm() {

    listModalContainer.style.display = 'none';
    allLists.forEach((item, index) => {
        item.active = false;

    })
    event.preventDefault();

    createList(listform.title.value);
    listform.reset();

}


function showReminders() {
    clearReminders();
    showListHeader();


    activeList().reminders.forEach((item, index) => {
        const reminder = document.createElement('label');
        reminder.classList.add('reminder-container');
        reminder.innerText = item.title;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked == true ? true: false;
        checkbox.addEventListener('change', reminderCheckChange);
        checkbox.index = index;
        reminder.appendChild(checkbox);

        const checkIcon = document.createElement('span');
        checkIcon.classList.add('reminder-checkmark');
        reminder.appendChild(checkIcon);




        const editBtn = document.createElement('div');
        editBtn.classList.add('reminder-options-edit');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', editReminderForm);
        editBtn.reminder = item;

        const removeBtn = document.createElement('div');
        removeBtn.classList.add('reminder-options-remove');
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', () => {
            removeReminder(index, item.title, item.dueDate, item.priority)
        });

        const reminderOptionsContainer = document.createElement('div');
        reminderOptionsContainer.classList.add('reminder-options-container');

        reminderOptionsContainer.appendChild(editBtn);
        reminderOptionsContainer.appendChild(removeBtn);

        reminder.appendChild(reminderOptionsContainer);





        remindersContainer.appendChild(reminder);
        //TODO: generate reminders here, (title, date, completed status, etc)
    })

    const addReminderBtn = document.querySelector('.new-reminder');
    addReminderBtn.addEventListener('click', newReminderForm);
}

function clearReminders() {
    remindersContainer.innerHTML = '';
}

//Add Reminder Modal functions and listeners
function newReminderForm() {
    reminderModalContainer.style.display = 'block';
    const createReminderBtn = document.getElementById('add-reminder');
    createReminderBtn.removeEventListener('click', submitUpdateReminderForm);
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function editReminderForm(evt) {

    reminderModalContainer.style.display = 'block';

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
    reminderModalContainer.style.display = 'none';
    createReminder(reminderform.title.value, reminderform.due.value, reminderform.priority.value);
    reminderform.reset();

}

function submitUpdateReminderForm(evt){

    const title = reminderform.title.value;
    const dueDate = reminderform.due.value;
    const priority = reminderform.priority.value;

    event.preventDefault();
    updateReminder(evt.currentTarget.reminder, title, dueDate, priority);

    reminderModalContainer.style.display = 'none';
    reminderform.reset();

}

//checkbox change function

function reminderCheckChange(evt){
    const index = evt.currentTarget.index;
    checkReminder(index, this);

}

// shared modal functions
reminderModalClose.addEventListener('click', closeModal);
listModalClose.addEventListener('click', closeModal);

function closeModal() {
    reminderModalContainer.style.display = 'none';
    listModalContainer.style.display = 'none';
    listform.reset();
    reminderform.reset();

}

function toggleReminderModal(){
    reminderModalContainer
}

window.onclick = function (event) {
    if (event.target == reminderModalContainer || event.target == listModalContainer) {
        closeModal();
    }
}



export { showLists, showListHeader, showReminders };