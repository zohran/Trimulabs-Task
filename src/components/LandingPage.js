import React from 'react'
import Job_List from './Job_List'
import Search from './Search'


function LandingPage({data,jobs,setAllJobs}) {

  return (
    <div className='container'>
        <Search setAllJobs={setAllJobs} data={data}/>
        <Job_List jobs={jobs}/>
    </div>
  )
}

export default LandingPage