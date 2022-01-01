import { allLists } from './index';
import { lists, reminders } from './ui';

//variable initialization, to get styles variables
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const createList = (title) => {

    allLists.push({
        title,
        reminders: [],
        active: allLists.size > 1 ? false : true,
    });
    lists.show();
    reminders.show();
    storeData();

};

const updateList = (list, newTitle) => {

    const index = getListIndex(list);
    allLists[index].title = newTitle;

    lists.show();
    reminders.show();
    storeData();

}

const removeList = (index) => {
    allLists.splice(index, 1);
    storeData();
    lists.showFirst();

};

const createReminder = (title, dueDate, priority) => {

    activeList().reminders.push({
        title,
        dueDate,
        priority,
        checked: false
    });
    reminders.show();
    storeData();

};


const updateReminder = (reminder, newTitle, newDate, newPriority) => {
    const index = getReminderIndex(reminder);


    activeList().reminders[index].title = newTitle;
    activeList().reminders[index].dueDate = newDate;
    activeList().reminders[index].priority = newPriority;

    reminders.show();
    storeData();

};

const removeReminder = (index) => {

    activeList().reminders.splice(index, 1);
    reminders.show();
    storeData();

};

const checkReminder = (index, reminder) => {

    if (reminder.checked) {
        activeList().reminders[index].checked = false;
    } else {
        activeList().reminders[index].checked = true;

    }
    reminders.show();
    storeData();


};

function getPriorityColor(priority) {

    switch (priority) {
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

function getReminderIndex(item) {
    return activeList().reminders.indexOf(item);
}

function getListIndex(list) {
    return allLists.indexOf(list);
}

function storeData() {
    window.localStorage.setItem('reminders', JSON.stringify(allLists));
}


function activeList() {
    let activeListArray = allLists.filter(list => list.active);
    return activeListArray[0];
}

export { createList, createReminder, activeList, removeReminder, updateReminder, checkReminder, removeList, updateList, storeData, getPriorityColor };