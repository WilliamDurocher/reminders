import { allLists } from './index';
import {showLists, showListHeader, showReminders} from './ui';

const createList = (title) => {

    allLists.push({
        title,
        reminders: [],
        active: true,
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



function activeList(){
    let activeListArray = allLists.filter(list => list.active);
    return activeListArray[0];
}

export {createList, createReminder, activeList};