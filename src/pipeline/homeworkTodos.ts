import dayjs from "dayjs";
import type { Todo } from "./types.js";
import { sortByDoneAndDeadline } from "./sortTodos.js";

export const addTodo = (todos: Todo[], newTodo: Todo): Todo[] => {
  throw new Error("ここを実装してください");
};

export const updateIsDone = (
  todos: Todo[], id: string, value: boolean
): Todo[] => {
  throw new Error("ここを実装してください");
};

export const removeCompletedTodos = (todos: Todo[]): Todo[] => {
  throw new Error("ここを実装してください");
};

export const removeTodoById = (todos: Todo[], id: string): Todo[] => {
  throw new Error("ここを実装してください");
};

export const countUncompletedTodos = (todos: Todo[]): number => {
  throw new Error("ここを実装してください");
};

export const createListItems = (todos: Todo[]): string[] => {
  throw new Error("ここを実装してください");
};