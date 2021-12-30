import { allLists } from './index';
import {
    activeList, createList, createReminder, removeReminder, updateReminder, checkReminder, removeList,
    updateList
} from './logic';
import editBtnSrc from './assets/edit-regular.svg';
import removeBtnSrc from './assets/minus-circle-solid.svg';
import addListBtnSrc from './assets/clipboard-check-solid.svg';
import addReminderBtnSrc from './assets/list-ul-solid.svg';



const listsContainer = document.querySelector('.lists-container');
const activeListName = document.querySelector('.reminders-header-title');
const remindersContainer = document.querySelector('.reminders-container');

const reminderModalContainer = document.querySelector('.modal-reminder-container');
const reminderFormTitle = document.querySelector('.modal-reminder-title');
const reminderModalClose = document.querySelector('.modal-reminder-close');

const listModalContainer = document.querySelector('.modal-list-container');
const listFormTitle = document.querySelector('.modal-list-title');
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


        const editListBtn = document.createElement('img');
        editListBtn.classList.add('list-options-edit');
        editListBtn.classList.add('icon');
        editListBtn.src = editBtnSrc;
        editListBtn.addEventListener('click', editListForm);
        editListBtn.list = item;


        const removeListBtn = document.createElement('img');
        removeListBtn.classList.add('list-options-remove');
        removeListBtn.classList.add('icon');
        removeListBtn.src = removeBtnSrc;
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
    const listsFooterContainer = document.querySelector('.lists-footer');
    const addListIcon = document.querySelector('.new-list-icon');
    addListIcon.src = addListBtnSrc;
    listsFooterContainer.addEventListener('click', newListForm);

}

function clearLists() {
    listsContainer.innerHTML = '';
}



//TODO: to use whenever a list is removed
function showFirstList() {
    allLists.forEach((item, index) => {
        if (index == 0) {
            item.active = true;
        } else {
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
    const createListBtn = document.getElementById('add-list');

    listModalContainer.style.display = 'block';
    createListBtn.innerText = 'Add';
    listFormTitle.innerText = 'Add a new List';
    createListBtn.removeEventListener('click', submitUpdateListForm);
    createListBtn.addEventListener('click', submitListForm);

}

function editListForm(evt) {
    const list = evt.currentTarget.list;
    const editListBtn = document.getElementById('add-list');


    listModalContainer.style.display = 'block';
    listform.title.value = list.title;
    listFormTitle.innerText = 'Update this List';
    editListBtn.innerText = 'Update';
    editListBtn.removeEventListener('click', submitListForm);
    editListBtn.addEventListener('click', submitUpdateListForm)
    editListBtn.list = list;

}

function submitUpdateListForm(evt) {

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



        const reminderContainer = document.createElement('div');
        reminderContainer.classList.add('reminder-container');


        const checkbox = document.createElement('div');
        checkbox.classList.add('reminder-checkmark');

        if (item.checked) {
            checkbox.classList.add('checkbox-checked');
        } else {
            checkbox.classList.add('checkbox-unchecked');
        }

        checkbox.addEventListener('click', reminderCheckChange);
        checkbox.index = index;
        checkbox.reminder = item;



        const reminderLabel = document.createElement('div');
        reminderLabel.innerText = item.title;
        reminderLabel.appendChild(checkbox);

        const reminderInfoContainer = document.createElement('div');
        reminderInfoContainer.classList.add('reminder-info-container');
        reminderInfoContainer.appendChild(reminderLabel);

        const editBtn = document.createElement('img');
        editBtn.classList.add('reminder-options-edit');
        editBtn.classList.add('icon');
        editBtn.src = editBtnSrc;
        editBtn.addEventListener('click', editReminderForm);
        editBtn.reminder = item;

        const removeBtn = document.createElement('img');
        removeBtn.classList.add('reminder-options-remove');
        removeBtn.classList.add('icon');
        removeBtn.src = removeBtnSrc;
        removeBtn.addEventListener('click', () => {
            removeReminder(index, item.title, item.dueDate, item.priority)
        });

        const reminderOptionsContainer = document.createElement('div');
        reminderOptionsContainer.classList.add('reminder-options-container');
        reminderOptionsContainer.appendChild(editBtn);
        reminderOptionsContainer.appendChild(removeBtn);

        reminderContainer.appendChild(reminderInfoContainer);
        reminderContainer.appendChild(reminderOptionsContainer);

        remindersContainer.appendChild(reminderContainer);
    })

    const remindersFooterContainer = document.querySelector('.reminders-footer');
    const addReminderBtnIcon = document.querySelector('.new-reminder-icon');
    addReminderBtnIcon.src = addReminderBtnSrc;
    remindersFooterContainer.addEventListener('click', newReminderForm);
}

function clearReminders() {
    remindersContainer.innerHTML = '';
}

//Add Reminder Modal functions and listeners
function newReminderForm() {
    reminderModalContainer.style.display = 'block';
    const createReminderBtn = document.getElementById('add-reminder');
    reminderFormTitle.innerText = 'Add a new Reminder';
    createReminderBtn.innerText = 'Add';
    createReminderBtn.removeEventListener('click', submitUpdateReminderForm);
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function editReminderForm(evt) {

    reminderModalContainer.style.display = 'block';

    const reminder = evt.currentTarget.reminder;
    const updateReminderBtn = document.getElementById('add-reminder');
    updateReminderBtn.removeEventListener('click', submitReminderForm);
    reminderFormTitle.innerText = 'Update this Reminder';
    updateReminderBtn.innerText = 'Update';
    reminderform.title.value = reminder.title;
    reminderform.due.value = reminder.dueDate;
    reminderform.priority.value = reminder.priority;
    updateReminderBtn.addEventListener('click', submitUpdateReminderForm);
    updateReminderBtn.reminder = reminder;


}

function submitReminderForm() {

    console.log(reminderform);
    event.preventDefault();
    reminderModalContainer.style.display = 'none';
    createReminder(reminderform.title.value, reminderform.due.value, reminderform.priority.value);
    reminderform.reset();

}

function submitUpdateReminderForm(evt) {

    const title = reminderform.title.value;
    const dueDate = reminderform.due.value;
    const priority = reminderform.priority.value;

    event.preventDefault();
    updateReminder(evt.currentTarget.reminder, title, dueDate, priority);

    reminderModalContainer.style.display = 'none';
    reminderform.reset();

}

//checkbox change function

function reminderCheckChange(evt) {
    const index = evt.currentTarget.index;
    checkReminder(index, evt.currentTarget.reminder);

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

function toggleRemindersModal() {
    //TODO
}

function toggleListsModal() {
    //TODO
}
window.onclick = function (event) {
    if (event.target == reminderModalContainer || event.target == listModalContainer) {
        closeModal();
    }
}



export { showLists, showReminders , showFirstList, showListHeader};