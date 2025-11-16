import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTaskForm from "../hooks/useTaskForm";
import TaskForm from "../Components/TaskForm"

export default function EditTask({ tasks, setTasks }){
  const { id } = useParams();
  const navigate = useNavigate();
  const { values, errors, handleChange, validate, setValues } = useTaskForm({ title:"", description:"" });

  useEffect(()=>{
    const t = tasks.find(x => String(x.id) === String(id));
    if (t) setValues(t);
  }, [id, tasks, setValues]);

  const onSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    setTasks(prev => prev.map(t => t.id === Number(id) ? { ...t, ...values } : t));
    navigate("/");
  };

  return <TaskForm values={values} errors={errors} handleChange={handleChange} onSubmit={onSubmit} btnText="Update" />;
}
