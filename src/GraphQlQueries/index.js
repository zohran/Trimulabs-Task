import { gql, useQuery } from "@apollo/client";

/** 
 *  
 * Testing Query
 * 
*/

export const Get_Jobs = () => {
  const getjobs = gql`
    query {
      jobs {
        id
        title
        isPublished
        company
        userEmail
        description
        applyUrl
      }
    }
  `;
  return useQuery(getjobs);
};


/** 
 *  
 * Query to get all the information about a selected job
 * 
*/
export const Get_Job_Detail = (companySlug,jobSlug) => {
  const Get_Job = gql`
    {
      job(input: {
        companySlug: "${companySlug}"
      jobSlug: "${jobSlug}"
      }){
        id,
        title
        applyUrl
        company{
          name
          websiteUrl
        }
        tags{
          id
          name
        }
        cities{
          id
          name
        }
        commitment{
          id
          title
        }
        createdAt
        isPublished
        userEmail
        postedAt
        description
      }
    }`;

  return useQuery(Get_Job);
};

/** 
 *  
 * Query to get all the jobs from the Job API using useQuery hook
 * 
*/

export const Temp = () => {
  const jobs = gql`
    {
      jobs {
        id
        title
        isPublished
        slug
        
        company {
          id
          name
          slug
        }  
        userEmail
        applyUrl
        description
      }
    }
  `;
  return useQuery(jobs);
};
