import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const deleteTodos = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const createTodo = ({
  userId,
  title,
  completed,
}: Omit<Todo, 'id' | 'loading'>) => {
  return client.post<Todo>('/todos', { userId, title, completed });
};

export const updateTodo = ({
  userId, title, completed, id,
}: Omit<Todo, 'loading'>) => {
  return client.patch<Todo>(`/todos/${id}`, { userId, title, completed });
};
