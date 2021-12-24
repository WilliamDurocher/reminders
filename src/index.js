import './styles.css';
import {createList, createReminder} from './logic';
import {showLists, showListHeader, showReminders} from './ui';

let allLists = [];

//todo: new list = create list, push into all list, render on the UI
createList("new List");


export {allLists};