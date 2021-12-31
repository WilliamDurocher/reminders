import { allLists } from './index';
import {
    activeList, createList, createReminder, removeReminder, updateReminder, checkReminder, removeList,
    updateList, getPriorityColor
} from './logic';
import editBtnSrc from './assets/edit-regular.svg';
import removeBtnSrc from './assets/trash-alt-regular.svg';
import addListBtnSrc from './assets/clipboard-check-solid.svg';
import addReminderBtnSrc from './assets/list-ul-solid.svg';

const lists = (() => {

    // lists view variables initialization
    const listsContainer = document.querySelector('.lists-container');
    const listsFooterContainer = document.querySelector('.lists-footer');
    const addListIcon = document.querySelector('.new-list-icon');

    function show() {

        _clear();

        allLists.forEach((item, index) => {

            const listContainer = document.createElement('div');
            listContainer.classList.add('list-container', 'hover');

            // main list info
            const list = document.createElement('div');
            list.className = 'list';
            list.innerText = item.title;
            list.addEventListener('click', _setActive);

            listContainer.appendChild(list);

            // options container - update and remove buttons
            const listOptionsContainer = document.createElement('div');
            listOptionsContainer.classList.add('list-options-container');

            const listEditBtn = document.createElement('img');
            listEditBtn.classList.add('list-options-edit');
            listEditBtn.classList.add('icon');
            listEditBtn.src = editBtnSrc;
            listEditBtn.addEventListener('click', listForm.edit);
            listEditBtn.list = item;

            const removeListBtn = document.createElement('img');
            removeListBtn.classList.add('list-options-remove');
            removeListBtn.classList.add('icon');
            removeListBtn.src = removeBtnSrc;
            removeListBtn.addEventListener('click', () => {
                removeList(index);
            });

            listOptionsContainer.appendChild(listEditBtn);
            listOptionsContainer.appendChild(removeListBtn);

            listContainer.appendChild(listOptionsContainer);

            listsContainer.appendChild(listContainer);
        });

        _showFooter();
    }

    // remove dynamically generated lists view
    function _clear() {

        listsContainer.innerHTML = '';
    }

    function showFirst() {

        allLists.forEach((item, index) => {
            if (index == 0) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
        show();
        reminders.show();
    }

    function _setActive(list) {

        allLists.forEach((item, index) => {
            if (item.title === list.currentTarget.innerText) {
                item.active = true;
            } else {
                item.active = false;
            }
        });

        reminders.show();
    }

    function _showFooter() {

        listsFooterContainer.addEventListener('click', listForm.add);
        addListIcon.src = addListBtnSrc;
    }

    return {
        show,
        showFirst,
    }

})();

const listForm = (() => {

    // list Form variables initialization
    const listModalContainer = document.querySelector('.modal-list-container');
    const listFormTitle = document.querySelector('.modal-list-title');
    const listModalClose = document.getElementById('closeList');
    const listFormSubmitBtn = document.getElementById('add-list');

    listModalClose.addEventListener('click', _close);
    window.addEventListener('click', _close); // Make sure modal closes if user click away from it


    function add() {

        _show();
        listFormSubmitBtn.innerText = 'Add';
        listFormTitle.innerText = 'Add a new List';
        listFormSubmitBtn.removeEventListener('click', _submitUpdate);
        listFormSubmitBtn.addEventListener('click', _submitAdd);

    }

    function edit(e) {

        const list = e.currentTarget.list;

        _show();
        listform.title.value = list.title;
        listFormTitle.innerText = 'Update this List';
        listFormSubmitBtn.innerText = 'Update';
        listFormSubmitBtn.removeEventListener('click', _submitAdd);
        listFormSubmitBtn.addEventListener('click', _submitUpdate)
        listFormSubmitBtn.list = list;
    }

    function _submitAdd() {

        _hide();

        allLists.forEach((item, index) => {
            item.active = false;

        });

        event.preventDefault();
        createList(listform.title.value);
        listform.reset();
    }

    function _submitUpdate(e) {
        _hide();
        const title = listform.title.value;
        event.preventDefault();
        updateList(e.currentTarget.list, title);
        listform.reset();
    }

    function _close(e) {

        if (e.target == listModalContainer || e.target == listModalClose) {
            listModalContainer.style.display = 'none';
            listform.reset();
        }
    }

    function _show() {

        listModalContainer.style.display = 'block';
    }

    function _hide() {

        listModalContainer.style.display = 'none';

    }

    return {
        add,
        edit,
    };

})();

const reminders = (() => {

    // reminders view variable initialization
    const activeListName = document.querySelector('.reminders-header-title');
    const reminderCount = document.querySelector('.reminders-header-count');
    const addReminderBtnIcon = document.querySelector('.new-reminder-icon');
    const remindersFooterContainer = document.querySelector('.reminders-footer');
    const remindersContainer = document.querySelector('.reminders-container');


    function show() {

        _clear();
        _showHeader();

        // reminders view is different if no reminders, so that user can easily create reminder
        if (activeList().reminders.length == 0) {

            _hideFooter();
            _showEmpty();

        } else {

            activeList().reminders.forEach((item, index) => {

                const reminderContainer = document.createElement('div');
                reminderContainer.classList.add('reminder-container');

                // info container, with reminder info (title, priority, due date)
                const reminderInfoContainer = document.createElement('div');
                reminderInfoContainer.classList.add('reminder-info-container');

                const checkbox = document.createElement('div');
                _toggleChecked(item, checkbox); //since the checkboxes are divs and not actual checkboxes, this will change the checkbox UI
                checkbox.classList.add('reminder-checkmark', 'hover');
                checkbox.addEventListener('click', _checkChange);
                checkbox.index = index;
                checkbox.reminder = item;

                const reminderLabel = document.createElement('div');
                reminderLabel.innerText = item.title;

                const reminderDetails = document.createElement('div');
                reminderDetails.innerText = item.dueDate;
                reminderDetails.classList.add('reminder-details');
                reminderDetails.style.backgroundColor = getPriorityColor(item.priority);

                reminderLabel.appendChild(checkbox);
                reminderLabel.appendChild(reminderDetails);

                reminderInfoContainer.appendChild(reminderLabel);

                // options container, with reminder actions (edit, remove)
                const reminderOptionsContainer = document.createElement('div');
                reminderOptionsContainer.classList.add('reminder-options-container');

                const editBtn = document.createElement('img');
                editBtn.classList.add('reminder-options-edit');
                editBtn.classList.add('icon');
                editBtn.src = editBtnSrc;
                editBtn.addEventListener('click', reminderForm.update);
                editBtn.reminder = item;

                const removeBtn = document.createElement('img');
                removeBtn.classList.add('reminder-options-remove');
                removeBtn.classList.add('icon');
                removeBtn.src = removeBtnSrc;
                removeBtn.addEventListener('click', () => {
                    removeReminder(index, item.title, item.dueDate, item.priority)
                });

                reminderOptionsContainer.appendChild(editBtn);
                reminderOptionsContainer.appendChild(removeBtn);

                reminderContainer.appendChild(reminderInfoContainer);
                reminderContainer.appendChild(reminderOptionsContainer);

                remindersContainer.appendChild(reminderContainer);
            })

            _showFooter();


        }

    }

    function _clear() {

        remindersContainer.innerHTML = '';

    }

    function _toggleChecked(reminder, checkbox) {

        if (reminder.checked) {
            checkbox.classList.add('checkbox-checked');
        } else {
            checkbox.classList.add('checkbox-unchecked');
        }
    }

    function _checkChange(e) {

        const index = e.currentTarget.index;
        checkReminder(index, e.currentTarget.reminder);
    }

    function _showHeader() {

        const count = activeList().reminders.length;
        activeListName.innerText = activeList().title;
        reminderCount.innerText = count > 1 ? `${count} Reminders` : `${count} Reminder`;

    }

    function _hideFooter() {

        if (remindersFooterContainer) {
            remindersFooterContainer.style.display = 'none';
        }
    }

    function _showFooter() {
        remindersFooterContainer.style.display = '';
        remindersFooterContainer.addEventListener('click', reminderForm.add);
        addReminderBtnIcon.src = addReminderBtnSrc;
    }

    function _showEmpty() {
        const emptyView = document.createElement('div');
        emptyView.classList.add('reminders-empty-view', 'hover');
        emptyView.innerText = "Add new Reminder";
        emptyView.addEventListener('click', reminderForm.add);
        remindersContainer.appendChild(emptyView);
    }

    return {
        show,
    }
})();

const reminderForm = (() => {

    // reminder form variable initialization
    const reminderModalContainer = document.querySelector('.modal-reminder-container');
    const reminderFormTitle = document.querySelector('.modal-reminder-title');
    const reminderModalClose = document.getElementById('closeReminder');
    const reminderFormDatepicker = document.querySelector('.reminder-datepicker')
    const reminderFormSubmitBtn = document.getElementById('add-reminder');

    reminderModalClose.addEventListener('click', _close);
    window.addEventListener('click', _close); // Make sure modal closes if user click away from it

    function add() {

        _show();
        reminderFormTitle.innerText = 'Add a new Reminder';
        reminderFormSubmitBtn.innerText = 'Add';
        reminderFormDatepicker.value = new Date().toISOString().slice(0, 10); //set today's date as default
        reminderFormSubmitBtn.removeEventListener('click', _submitUpdate);
        reminderFormSubmitBtn.addEventListener('click', _submitAdd);
    }

    function update(e) {

        const reminder = e.currentTarget.reminder;

        _show();
        reminderFormTitle.innerText = 'Update this Reminder';
        reminderFormSubmitBtn.innerText = 'Update';
        reminderform.title.value = reminder.title;
        reminderform.due.value = reminder.dueDate;
        reminderform.priority.value = reminder.priority;
        reminderFormSubmitBtn.removeEventListener('click', _submitAdd);
        reminderFormSubmitBtn.addEventListener('click', _submitUpdate);
        reminderFormSubmitBtn.reminder = reminder;
    }

    function _submitAdd() {

        _hide();
        event.preventDefault();
        createReminder(reminderform.title.value, reminderform.due.value, reminderform.priority.value);
        reminderform.reset();

    }

    function _submitUpdate(e) {

        _hide();
        const title = reminderform.title.value;
        const dueDate = reminderform.due.value;
        const priority = reminderform.priority.value;

        event.preventDefault();
        updateReminder(e.currentTarget.reminder, title, dueDate, priority);
        reminderform.reset();
    }

    function _show() {

        reminderModalContainer.style.display = 'block';
    }

    function _hide() {

        reminderModalContainer.style.display = 'none';
    }

    function _close(e) {
        if (e.target == reminderModalContainer || e.target == reminderModalClose) {
            reminderModalContainer.style.display = 'none';
            reminderform.reset();
        }
    }

    return {
        add,
        update,
    }
})();

// Information modal: not called by other functions or imported, but still calls itselfs
const information = (() => {

    const infoModalContainer = document.querySelector('.modal-info-container');
    const infoModalClose = document.getElementById('closeInfo');
    const infoBtn = document.getElementById('info');

    infoBtn.addEventListener('click', _show);
    infoModalClose.addEventListener('click', _close);
    window.addEventListener('click', _close); // Make sure modal closes if user click away from it

    function _show() {
        infoModalContainer.style.display = 'block';

    }

    function _close(e) {

        if (e.target == infoModalContainer || e.target == infoModalClose) {
            infoModalContainer.style.display = 'none';
        }

    }
})();

export { lists, reminders };