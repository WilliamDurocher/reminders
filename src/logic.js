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

const removeReminder = (title, dueDate, priority) => {

    const index = activeList().reminders.indexOf({title, dueDate, priority})
    activeList().reminders.splice(index, 1);
    showReminders();
};



function activeList(){
    let activeListArray = allLists.filter(list => list.active);
    return activeListArray[0];
}

export {createList, createReminder, activeList, removeReminder};