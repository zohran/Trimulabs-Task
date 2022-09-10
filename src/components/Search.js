import React, { useEffect, useState } from "react";

function Search({setAllJobs,data}) {

  let [query,setQuery]=useState("")
  const handleChange=(e)=>{
    e.preventDefault();
    setQuery(e.target.value);
    
    if(query==="")
    {
      setAllJobs([...data.jobs])
    }
    else
    {
      setAllJobs(data.jobs.filter(j => j.title.toLowerCase().includes(e.target.value.toLowerCase()) || j.company.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  }

  useEffect(()=>{
    setAllJobs([...data.jobs])
  },[data,setAllJobs])
  return (
      <input className="search-input" value={query} onChange={(e)=>handleChange(e)} placeholder="Search job/company" type="text" />
  );
}

export default Search;
