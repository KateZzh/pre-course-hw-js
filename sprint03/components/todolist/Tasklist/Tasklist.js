import { Task } from './Task/Task.js';

export function Tasklist(tasks) {
  const container = document.createElement('ol');

  for (let i = 0; i < tasks.length; i++) {
    const taskElement = Task(tasks[i]);
    container.append(taskElement);
  }

  container.append();
  return container;
}
