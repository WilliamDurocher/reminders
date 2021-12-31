import './styles.css';
import { createList, createReminder } from './logic';
import { lists } from './ui';


let allLists = [];  // main application object: lists array, containing list information and reminders


// if we do not have localstorage yet or is not available, setup default Reminders page
if (!localStorage.getItem('reminders')) {
    createList("My New Reminders List");
    createReminder('This is my reminders', '2025-12-31', 'low');
    createReminder('You can see the date that the reminder is due', '2025-12-31', 'medium');
    createReminder('And the priority it has been set in', '2025-12-31', 'high');
    createReminder('You can also create, update and remove any Reminder or List', '2025-12-31', 'low');
    createList("Groceries");
}else{
    allLists = JSON.parse(window.localStorage.getItem('reminders'));
    lists.show();
    lists.showFirst();
}

export { allLists };