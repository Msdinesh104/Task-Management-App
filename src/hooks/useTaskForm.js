import { useState } from "react";

export default function useTaskForm(initial = { title: "", description: "" }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!values.title?.trim()) err.title = "Title required";
    if (values.title?.length > 100) err.title = "Title too long (max 100)";
    if (!values.description?.trim()) err.description = "Description required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const resetForm = () => {
    setValues(initial);
    setErrors({});
  };

  return { values, errors, handleChange, validate, resetForm, setValues };
}
