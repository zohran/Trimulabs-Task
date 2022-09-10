import { gql, useQuery } from "@apollo/client";

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
