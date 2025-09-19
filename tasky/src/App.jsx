import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium", done: false },
      { id: 3, title: "Tidy up", description: "Pick up clutter", deadline: "Today", priority: "High", done: false }
    ]
  });

  // Toggle task done status
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
  }

  return (
    <div className="container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task, index) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          done={task.done}
          markDone={() => doneHandler(index)}
        />
      ))}
    </div>
  );
}

export default App;
