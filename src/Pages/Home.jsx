import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TaskTable from "../Components/TaskTable"
import Pagination from "../Components/Pagination"

export default function Home({ tasks, setTasks }){
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [sortKey, setSortKey] = useState({ key: 'title', dir: 'asc' });
  const perPage = 5;

  const handleDelete = id => setTasks(prev => prev.filter(t => t.id !== id));

  const onSortToggle = key => {
    setSortKey(prev => {
      if (prev.key === key) {
        return { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' };
      }
      return { key, dir: 'asc' };
    });
  };

  const filtered = useMemo(() => {
    const s = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()));
    const sorted = s.sort((a,b) => {
      const valA = (a[sortKey.key]||"").toString().toLowerCase();
      const valB = (b[sortKey.key]||"").toString().toLowerCase();
      if (valA < valB) return sortKey.dir === 'asc' ? -1 : 1;
      if (valA > valB) return sortKey.dir === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [tasks, search, sortKey]);

  
  const pageItems = filtered.slice(page*perPage, page*perPage + perPage);

  return (
    <div className="container">
      <h1>Task Manager App</h1>

      <div className="top">
        <input placeholder="Search..." onChange={e=>{ setSearch(e.target.value); setPage(0); }} />
        <Link to="/create"><button>Create Task</button></Link>
      </div>

      <TaskTable tasks={pageItems} onDelete={handleDelete} onSortToggle={onSortToggle} />
      <Pagination total={filtered.length} perPage={perPage} current={page} onPage={setPage} />
    </div>
  );
}
