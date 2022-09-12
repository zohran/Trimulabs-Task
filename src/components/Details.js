import React from "react";
import { Link, useParams } from "react-router-dom";
import { Get_Job_Detail } from "../GraphQlQueries/index.js";
import Loading from "./Loading.js";
import { FaArrowCircleLeft } from "react-icons/fa";
function Details() {
  let { jobSlug, companySlug } = useParams();
  let { loading, data } = Get_Job_Detail(companySlug, jobSlug);
  if (loading) return <Loading />;
  return (
    <div>
      <div className="detail-container">
        <div className="detail-top">
          <div className="detail-top-left">
            <div>
              <div className="detail-title">{data.job.title}</div>
              <div className="detail-published">
                {data.job.isPublished ? <div>Open</div> : <div>Close</div>}
              </div>
            </div>

            <div>
              <div>
                <div className="detail-company">
                  {" "}
                  <span>{data.job.company.name}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="detail-Type">
                <span>{data.job.commitment.title}</span>
              </div>
            </div>

            <div>
              {data.job.userEmail ? (
                <div className="detail-email">
                  Posted by: {data.job.userEmail}
                </div>
              ) : (
                <div className="detail-email">Posted by: Unknown...</div>
              )}
            </div>
          </div>
          <div className="detail-top-right">
            <div>
              <div className="detail-tags" style={{fontSize:"15rem"}}>
                Tags:
                <div className="tags">
                  {data.job.tags.map((tag) => (
                    <div className="tag">{tag.name}</div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="detail-date" style={{fontSize:"15rem"}}>
                Date:
                <div style={{ color: "white", fontSize:"10rem" }}>{data.job.createdAt}</div>
              </div>
            </div>

            <div className="apply">
              <a href={data.job.applyUrl} target="new">
                <button className="detail-apply">Apply</button>
              </a>
              
              <Link to="/">
                <button className="detail-apply">Home</button>
              </Link>
            </div>

          </div>
        </div>
        <div className="detail-bottom">
          <div>
            <div className="detail-description">{data.job.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
