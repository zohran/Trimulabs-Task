import React from "react";
import { Link } from "react-router-dom";

function Card({ job }) {
  console.log(job.tags)
  return (
    <div className="card-container" id={job.id}>
      <div className="left">
        <div>
          <div className="card-title">{job.title}</div>

          <div className="card-published">
            {job.isPublished ? <div>Open</div> : <div>Close</div>}
          </div>
        </div>

        <div ><div className="card-company">{job.company.name}</div>
        </div>

        {/* <div className="card-email">
          {
            job.use
          }
        </div> */}
        {
          job.userEmail?<div className="card-email">{job.userEmail}</div>:
            <div className="card-email">Unknown...</div>
        }
      </div>

      <div className="right">
        <div className="card-description">
          {job.description}
        </div>

        <div>
          <a href={job.applyUrl} target="new">
            <button className="card-apply"> Apply</button>
          </a>
        </div>

        <div>
          <Link to={"/detail/"+job.slug+"/"+job.company.slug}>
            <button className="job-description">Description</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
