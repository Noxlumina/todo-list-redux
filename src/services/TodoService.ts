import { TodoModel } from '../models/TodoModel';

export class TodoService {

    apiUrl: string = "http://localhost:5000/todos"

    headers: Headers = new Headers({
        "Content-Type":"application/json"
    })
    
    public findAll = (): Promise<TodoModel[]> => {
        return fetch(this.apiUrl).then(data => data.json());
    }

    public delete = (id: number) => {
        return fetch(`${this.apiUrl}/${id}`, {method: "delete"}).then(data => data.json());
    }

    public put = (todo: TodoModel) => {
        console.log("service", JSON.stringify(todo))
        return fetch(`${this.apiUrl}/${todo.id}`, {method: "put", body: JSON.stringify(todo), headers: this.headers})
    }
}

export const todoService = Object.freeze(new TodoService())