import { allLists } from './index';
import {showLists, showListHeader, showReminders} from './ui';

const createList = (title) => {

    allLists.push({
        title,
        reminders: [],
        active: allLists.size > 1 ? false: true,
    });
    showLists();
    showListHeader();
    showReminders();
};

const removeList = (index) => {
    allLists.splice(index, 1);
    showLists();
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
};


const updateReminder = (reminder, newTitle, newDate, newPriority) => {
const index = getReminderIndex(reminder);


activeList().reminders[index].title = newTitle;
activeList().reminders[index].dueDate = newDate;
activeList().reminders[index].priority = newPriority;

showReminders();


};

const removeReminder = (index) => {

    activeList().reminders.splice(index, 1);
    showReminders();
};

const checkReminder = (index, reminder) => {

    if (reminder.checked){
        activeList().reminders[index].checked = true;
    }else{
        activeList().reminders[index].checked = false;

    }

};

function getReminderIndex(item){
    return activeList().reminders.indexOf(item);
}


function activeList(){
    let activeListArray = allLists.filter(list => list.active);
    return activeListArray[0];
}

export {createList, createReminder, activeList, removeReminder, updateReminder, checkReminder, removeList};