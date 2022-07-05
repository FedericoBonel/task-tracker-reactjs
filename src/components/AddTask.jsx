import { useState } from "react";

const AddTask = ({ onSubmission }) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      alert("Please add task description");
      return;
    }

    if (!date) {
      alert("Please add task date");
      return;
    }

    onSubmission({ description, date, reminder });

    setDescription("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form scale-in-center" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-desc">Task</label>
        <input
          id="task-desc"
          type="text"
          value={description}
          placeholder="Add your task"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="task-date">Day & Time</label>
        <input
          id="task-date"
          type="text"
          value={date}
          placeholder="Add Date & Time"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="task-reminder">Reminder</label>
        <input
          id="task-reminder"
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <button className="btn btn-block" type="submit">
        Save Task
      </button>
    </form>
  );
};

export default AddTask;
