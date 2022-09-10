import React from 'react'
import Card from './Card'

function Job_List({jobs}) {
  console.log(jobs)
  return (
    <div className='jobs-list-container'>
    {
      jobs.map(job=><Card job={job} />)
    }
    </div>
  )
}

export default Job_List