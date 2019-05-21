export class Task {

	description: string;
	state: string;
	priority: string;

	constructor(description: string, state: string, priority: string){
		this.description = description;
		this.state = state;
		this.priority = priority;
	}
}
