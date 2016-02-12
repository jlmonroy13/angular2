import {Component} from "angular2/core";
import {TodoService} from "./todo-service";
import {TodoItemRender} from "./todo-item-render";

@Component({
	selector: 'todo-list',
	directives: [TodoItemRender],
	template: `
		<div>
			<ul>
				<li *ngFor="#todo of todoService.todos">
					<todo-item-render [todo]="todo"></todo-item-render>
				</li>
			</ul>
		</div>
	`
})
export class TodoList {
	constructor(public todoService:TodoService) {

	}
}