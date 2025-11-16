import React from "react";
import { useNavigate } from "react-router-dom";
import useTaskForm from "../hooks/useTaskForm";
import TaskForm from "../Components/TaskForm"

export default function CreateTask({ setTasks }) {

  const navigate = useNavigate();
  const { values, errors, handleChange, validate, resetForm } = useTaskForm({ title:"", description:"" });

  const onSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    setTasks(prev => [...prev, { id: Date.now(), ...values }]);
    resetForm();
    navigate("/");
  };

  return <TaskForm values={values} errors={errors} handleChange={handleChange} onSubmit={onSubmit} btnText="Create" />;
}
