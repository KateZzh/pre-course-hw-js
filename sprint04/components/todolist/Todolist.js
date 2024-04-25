import { openAddNewTaskDialog } from '../../data/data.js';
import { Button } from '../common/Button/Button.js';
import { AddNewTaskDialog } from './AddNewTaskDialog/AddNewTaskDialog.js';
import { Header } from './Header/Header.js';
import { Tasklist } from './Tasklist/Tasklist.js';

export function Todolist(todolistData) {
  const container = document.createElement('div');
  const headerElement = Header(todolistData.todolist.title);
  const tasklistElement = Tasklist(todolistData.todolist.tasks);
  const addBtnElement = Button('+', () => openAddNewTaskDialog());
  const addNewTaskDialogElement = AddNewTaskDialog();

  container.append(headerElement, tasklistElement, addBtnElement, addNewTaskDialogElement);
  return container;
}
