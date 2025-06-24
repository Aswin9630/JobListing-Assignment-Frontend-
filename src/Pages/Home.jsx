import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { BACKEND_URL } from "../utils/constants";
import JobFilter from "../components/JobFilter";

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [allJobData, setAllJobData] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
    salaryRange: [1000, 100000],
  });

  useEffect(() => {
    fetchAllJobs();
  }, []);
 

  const applyFilters = () => {
    const filtered = allJobData.filter((job) => {
      const matchTitle = filters.title === '' || (job.jobTitle  && job.jobTitle.toLowerCase().includes(filters.title.toLowerCase()))
      const matchLocation = filters.location === '' || (job.location && job.location.toLowerCase().includes(filters.location.toLowerCase()))
      const matchJobType = filters.jobType === '' || job.jobType === filters.jobType
      const matchSalary = job.salaryMin >= filters.salaryRange[0] && job.salaryMax <= filters.salaryRange[1];

      return matchTitle && matchLocation && matchJobType && matchSalary;
    });
     setJobData(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, allJobData]);


  const fetchAllJobs = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/jobs/view`);
      const data = await response.json();
      setJobData(data.jobs);
      setAllJobData(data.jobs);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar onJobAdded={fetchAllJobs} />
      <JobFilter filters={filters} setFilters={setFilters} />
      <div className="flex flex-wrap gap-6 justify-evenly mt-7">
        {jobData.length === 0 ? (
          <div className="text-2xl font-bold text-center my-19">
            No jobs found
          </div>
        ) : (
          jobData.map((job, index) => (
            <JobCard
              key={index}
              index={index}
              title={job.jobTitle}
              company={job.company}
              location={job.location}
              jobType={job.jobType}
              salaryMin={job.salaryMin}
              salaryMax={job.salaryMax}
              description={job.description}
              deadline={job.deadline}
              id={job._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
