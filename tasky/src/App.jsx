import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium", done: false },
      { id: 3, title: "Tidy up", description: "Pick up clutter", deadline: "Today", priority: "High", done: false }
    ]
  });

  // Form state for new tasks
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  // Toggle task done status
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
  }

  // Delete task
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  }

  // Handle changes in the form
  const formChangeHandler = (event) => {
    let form = { ...formState };

    switch(event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      default:
        form = formState;
    }

    setFormState(form);
    console.log(formState); // verify changes
  }

  // Handle form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = { ...formState };

    form.id = uuidv4();
    form.priority = "Low"; // default priority
    form.done = false;

    tasks.push(form);
    setTaskState({ tasks });

    // Reset form
    setFormState({ title: "", description: "", deadline: "" });
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
          deleteTask={() => deleteHandler(index)}
        />
      ))}

      <AddTaskForm 
        submit={formSubmitHandler} 
        change={formChangeHandler} 
        formState={formState} 
      />
    </div>
  );
}

export default App;
