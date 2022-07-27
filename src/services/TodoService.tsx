import { TodoModel } from '../models/TodoModel';

export class TodoService {

    apiUrl: string = "http://localhost:3000/todos"

    headers: Headers = new Headers({
        "Content-Type":"application/json",
        "Accept-Type": "application/json"
    })
    
    public findAll = (): Promise<TodoModel[]> => {
        return fetch(this.apiUrl).then(data => data.json());
    }

    public delete = (id: number) => {
        return fetch(`${this.apiUrl}/${id}`, {method: "delete"}).then(data => data.json());
    }

    public put = (todo: TodoModel) => {
        return fetch(`${this.apiUrl}/${todo.id}`, {method: "put", body: JSON.stringify(todo), headers: this.headers}).then(data => data.json());
    }

    public create = (todo: TodoModel) => {
        return fetch(`${this.apiUrl}`, {method: "post", body: JSON.stringify(todo), headers: this.headers}).then(data => data.json());
    }

    // public findByTitle = (title: string) => {
    //     return fetch(`${this.apiUrl}/_search?title=${title}`, {headers: this.headers})
    // }
}

export const todoService = Object.freeze(new TodoService())