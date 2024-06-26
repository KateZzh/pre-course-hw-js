export const data = {
  todolist: {
    id: crypto.randomUUID(),
    title: 'Todolist',
    tasks: [
      {
        id: crypto.randomUUID(),
        title: 'Learn HTML',
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn CSS',
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn JS',
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn React',
      },
    ],
    addNewTaskDialog: {
      isOpen: false,
    },
  },
};

let notifySubscriber = null;

export function subscribe(subscriber) {
  notifySubscriber = subscriber;
}

//CRUD tasks:
export function deleteTask(taskId) {
  data.todolist.tasks = data.todolist.tasks.filter((t) => t.id !== taskId);
  notifySubscriber(); //refreshUI()
}

export function addTask(taskTitle) {
  const newTask = {
    id: crypto.randomUUID(),
    title: taskTitle,
  };

  data.todolist.tasks.push(newTask);
  notifySubscriber(); //refreshUI()
}

//UI
export function openAddNewTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = true;
  notifySubscriber();
}

export function closeAddNewTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = false;
  notifySubscriber();
}
