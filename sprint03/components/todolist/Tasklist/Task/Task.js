import { deleteTask } from "../../../../data/data.js";
import { Button } from "../../../common/Button/Button.js";

export function Task(task) {
  const container = document.createElement('li');
  const deleteBtnElement = Button("x", () => deleteTask(task.id))

  container.append(task.title, deleteBtnElement);

  return container;
}
