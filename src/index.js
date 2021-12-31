import './styles.css';
import { createList, createReminder } from './logic';
import { showLists, showReminders, showFirstList} from './ui';

let allLists = [];


if (!localStorage.getItem('reminders')) {
    createList("Groceries");
    createReminder('Fruits', '2025-12-31', 'low');
    createReminder('Bacon', '2025-12-31', 'medium');
    createReminder('Pizza', '2025-12-31', 'high');

}else{
    allLists = JSON.parse(window.localStorage.getItem('reminders'));
    console.log(allLists)
    showLists();
    showFirstList();
}



export { allLists };