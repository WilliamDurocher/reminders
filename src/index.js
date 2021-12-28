import './styles.css';
import {createList, createReminder} from './logic';
import {showLists, showListHeader, showReminders} from './ui';

let allLists = [];

//todo: new list = create list, push into all list, render on the UI
createList("New List");
//TESTING PURPOSES
createReminder('My new reminder', '2021-12-31', 'low');


export {allLists};