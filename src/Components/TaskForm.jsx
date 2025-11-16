import React from "react";

const TaskForm = ({ values, errors, handleChange, onSubmit, btnText }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>{btnText} Task</h2>

      <label>Title</label>
      <input name="title" value={values.title || ""} onChange={handleChange} />
      {errors.title && <p className="error">{errors.title}</p>}

      <label>Description</label>
      <textarea name="description" value={values.description || ""} onChange={handleChange} />

      {errors.description && <p className="error">{errors.description}</p>}

      <button type="submit">{btnText}</button>
    </form>
  );
};

export default TaskForm;
