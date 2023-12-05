import React from 'react';

const Filter = ({ onFilterChange,setFilterStatus,filterStatus }) => {

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    onFilterChange(status);
  };

  return (
    <div>
      <label className='m-2' htmlFor="filter">Status Filter : </label>
      <select
       className={`${filterStatus === 'Completed' ? 'light-green-sts': filterStatus === 'All'? 'sky-blue'  : 'bg-danger'}`}
        id="filter"
        value={filterStatus}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option  value="All">ALL</option>
        <option style={{ backgroundColor: "#13ad89" }} value="Completed">Completed</option>
        <option className="btn btn-danger" value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default Filter;