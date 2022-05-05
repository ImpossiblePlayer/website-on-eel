import 'eel.js'

let newTasksContainer = document.getElementsByClassName('new_tasks');
let completedTasksContainer = document.getElementsByClassName('completed_tasks');

// при нажатии любой кнопки будет ререндерится раздел с заданиями
document.querySelector('button').onclick() = renderTasks;
const renderTasks = async () => {
	let data = eel.return_data()
	newTasksContainer.innerHTML = ''
	data.newTasks.map((task) => {
		newTasksContainer.prepend(document.createElement(`
			<div class="task">
				<div class="task_content">${task.task}</div>
				<div class="task_footer">
					<div class="date">${task.date}</div>
					<button class="done">
						<img src="btn_pics/done.svg" alt="+" />
					</button>
				</div>
			</div>`))
	})
}



eel.expose(add_task);
const add_task = async () => {
	text = document.getElementById('add_new_task').value();
	data.append();
}




document.getElementById('add_new_task').onclick() = add_task();

