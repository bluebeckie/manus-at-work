import { useState } from 'react';

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;
    
    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Filter tasks based on current filter
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return activeTasks;
      case 'completed':
        return completedTasks;
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form onSubmit={addTask}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button 
          type="button" 
          className="btn toggle-btn" 
          aria-pressed={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button 
          type="button" 
          className="btn toggle-btn" 
          aria-pressed={filter === 'active'}
          onClick={() => setFilter('active')}
        >
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button 
          type="button" 
          className="btn toggle-btn" 
          aria-pressed={filter === 'completed'}
          onClick={() => setFilter('completed')}
        >
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        {tasks.length === 0 
          ? 'No tasks yet' 
          : filter === 'all' 
            ? `${activeTasks.length} ${activeTasks.length === 1 ? 'task' : 'tasks'} remaining`
            : filter === 'active'
              ? `${activeTasks.length} active ${activeTasks.length === 1 ? 'task' : 'tasks'}`
              : `${completedTasks.length} completed ${completedTasks.length === 1 ? 'task' : 'tasks'}`
        }
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {filteredTasks.map((task) => (
          <li key={task.id} className="todo stack-small">
            <div className="c-cb">
              <input 
                id={`todo-${task.id}`} 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <label className="todo-label" htmlFor={`todo-${task.id}`}>
                {task.text}
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">{task.text}</span>
              </button>
              <button 
                type="button" 
                className="btn btn__danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete <span className="visually-hidden">{task.text}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

