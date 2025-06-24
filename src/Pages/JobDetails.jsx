import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";

// company: "Amazon";
// createdAt: "2025-06-23T08:33:56.627Z";
// deadline: "2025-06-30T00:00:00.000Z";
// description: "Mern stack developer\nAble to manage multiple projects.\ngood communication and collaborate \nagile methadologies";
// jobTitle: "MERN Stack developer";
// jobType: "FullTime";
// location: "Bengaluru";
// salaryMax: 50000;
// salaryMin: 30000;
// updatedAt: "2025-06-23T08:33:56.627Z";
// __v: 0;
// _id: "685911740faef8989542b1cc";

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState([]);

  const createdDate = new Date(jobDetails.createdAt);
const deadlineDate = new Date(jobDetails.deadline);

// Format to readable strings (e.g., "June 23, 2025")
const formattedCreatedDate = createdDate.toLocaleDateString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const formattedDeadline = deadlineDate.toLocaleDateString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});


  const fetchJobDetails = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/jobs/view/${id}`);
      const data = await response.json();
      setJobDetails(data.jobById)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, []);

  return (
    <div className="bg-gray-50">
      <Navbar />

       <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10 m-10">
                <h1 className="text-xl md:text-3xl font-bold mb-3">{jobDetails.jobTitle}</h1>
        <div className="flex justify-between">
            <div>
                <p className="text-gray-600 mb-2 flex flex-col md:flex md:flex-row gap-1">Company: <span className="font-medium text-gray-800">{jobDetails.company}</span></p>
                <p className="text-gray-600 mb-2 flex flex-col md:flex md:flex-row gap-1">Location: <span className="font-medium text-gray-800">{jobDetails.location}</span></p>
                <p className="text-gray-600 mb-2 flex flex-col md:flex md:flex-row gap-1">Type: <span className="font-medium text-gray-800">{jobDetails.jobType}</span></p>
                <p className="text-gray-600 mb-2 flex flex-col md:flex md:flex-row gap-1">Salary : <span className="font-medium text-gray-800">{jobDetails.salaryMin} - {jobDetails.salaryMax}/-</span></p>
            </div>
            <div>
                <p className="text-gray-600 mb-6">Posted On:<span className="font-medium text-gray-800"> {formattedCreatedDate}</span></p>
                <p className="text-gray-600 mb-2">Last date:<span className="font-medium text-gray-800"> {formattedDeadline}</span></p>
            </div>
        </div>

            <h2 className="text-xl font-semibold mb-2 mt-8">Job Description</h2>
        <div className="text-gray-700 whitespace-pre-line">{jobDetails.description}</div>

            <button className="mx-auto mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer flex justify-end">
                Apply Now
            </button>
        </div>
    </div>
  );
};

export default JobDetails;
