import './styles.css';
import { createList, createReminder } from './logic';
import { showLists, showListHeader, showReminders } from './ui';

let allLists = [];


if (!localStorage.getItem('reminders')) {
    createList("New List");
    createReminder('My new reminder', '2021-12-31', 'low');
}else{
    allLists = JSON.parse(window.localStorage.getItem('reminders'));
    showReminders();
    showListHeader();
    showLists();
}



export { allLists };