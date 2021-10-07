export interface ITodoContext {
  id: number;
  content: string;
  checked: boolean;
}

export interface ItodoStore {
  todoList: ITodoContext[];
  increaseId: number;

  addContent: (content: string) => void;
  removeContent: (id: number) => void;
  toggleCheck: (id: number) => void;
}
