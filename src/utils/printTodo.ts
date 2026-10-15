import dayjs from "dayjs";
import type { Todo } from "../types.js";

export const printTodo = (todo: Todo): void => {
  const { name, priority, isDone, deadline } = todo; // ◀◀ 分割代入
  
  const done = isDone ? "完了" : "未完了";

  const todoSummary =
    `(優先度: ${priority}) ${name}` +
    ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}` +
    ` (${done})`;
  console.log(todoSummary);
};