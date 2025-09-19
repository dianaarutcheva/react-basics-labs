import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Task title:
          <input
            type="text"
            name="title"
            required
            value={props.formState.title}
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Due date:
          <input
            type="date"
            name="deadline"
            required
            value={props.formState.deadline}
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Details:
          <input
            type="text"
            name="description"
            value={props.formState.description}
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTaskForm;
