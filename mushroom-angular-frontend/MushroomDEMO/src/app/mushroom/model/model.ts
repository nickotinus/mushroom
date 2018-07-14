export class Task{

	constructor(id: number, description: string, status: string) {
		this.id = id;
		this.description = description;
		this.status = status;
	}

	id: number;
	description: string;
	status: string;
}

export class UpdateTaskStatusRequest{

	constructor(taskId: number, status: string) {
		this.taskId = taskId;
		this.status = status;
	}

	taskId: number;
	status: string
}
