import React from "react";

export default function Pagination({ total, perPage, current, onPage }) {
  const pages = Math.max(1, Math.ceil(total / perPage));
  return (
    <div className="pagination">
      {Array.from({length:pages}).map((_,i)=>(
        <button key={i} className={i===current?'active':''} onClick={()=>onPage(i)}>{i+1}</button>
      ))}
    </div>
  );
}
