import { allLists } from './index';
import {showLists, showListHeader, showReminders} from './ui';

const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const createList = (title) => {

    allLists.push({
        title,
        reminders: [],
        active: allLists.size > 1 ? false: true,
    });
    showLists();
    showListHeader();
    showReminders();
    storeData();

};

const updateList = (list, newTitle) => {
    const index = getListIndex(list);

    allLists[index].title = newTitle;

    showLists();
    showListHeader();
    showReminders();
    storeData();
    
}

const removeList = (index) => {
    allLists.splice(index, 1);
    showLists();
    storeData();

};

const createReminder = (title, dueDate, priority) => {
//TODO Local Storage

    activeList().reminders.push({
        title,
        dueDate,
        priority,
        checked: false
    });
showReminders();
storeData();

};


const updateReminder = (reminder, newTitle, newDate, newPriority) => {
const index = getReminderIndex(reminder);


activeList().reminders[index].title = newTitle;
activeList().reminders[index].dueDate = newDate;
activeList().reminders[index].priority = newPriority;

showReminders();
storeData();

};

const removeReminder = (index) => {

    activeList().reminders.splice(index, 1);
    showReminders();
    storeData();

};

const checkReminder = (index, reminder) => {

    if (reminder.checked){
        activeList().reminders[index].checked = false;
    }else{
        activeList().reminders[index].checked = true;

    }
    showReminders();
    storeData();


};

function getPriorityColor(priority){


    switch(priority){
        case 'low':
             return rootStyles.getPropertyValue('--low-priority');
        case 'medium':
             return rootStyles.getPropertyValue('--medium-priority');
        case 'high':
             return rootStyles.getPropertyValue('--high-priority');
        default:
            return 'black';
    }
}

function getReminderIndex(item){
    return activeList().reminders.indexOf(item);
}

function getListIndex(list){
    return allLists.indexOf(list);
}

function storeData(){
    window.localStorage.setItem('reminders', JSON.stringify(allLists));
}


function activeList(){
    let activeListArray = allLists.filter(list => list.active);
    return activeListArray[0];
}

export {createList, createReminder, activeList, removeReminder, updateReminder, checkReminder, removeList, updateList, storeData, getPriorityColor};