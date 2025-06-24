import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { PiBuildingOffice } from "react-icons/pi";
import { BiLayer } from "react-icons/bi";
import { Link } from "react-router-dom";

const logos = [
  "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
  "https://techstory.in/wp-content/uploads/2022/02/Swiggy.jpg",
  "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg"

]
const JobCard = ({ index, title, salaryMax, description, id }) => {

  const logo = logos[index % logos.length];

  const salaryMaxLPA = (salaryMax*12)/100000;

  return (
    <div className="max-w-2xs w-full bg-white shadow-2xs rounded-xl p-4 relative hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 shadow-sm rounded bg-neutral-100">
          <img src={logo} alt="Company Logo" className="w-10 h-10 rounded-full object-cover" />
        </div>
        <span className="absolute top-2 right-2 bg-blue-300 text-xs px-2 py-1 rounded-lg">24h Ago</span>
      </div>

      <h2 className="text-lg font-semibold mb-1">{title}</h2>

      <div className="text-md text-gray-500 flex justify-between gap-3 mb-3">
        <span className="flex items-center gap-1"><FiUserPlus/>1-3 yr Exp</span>
        <span className="flex items-center gap-1"><PiBuildingOffice/> Onsite</span>
        <span className="flex items-center gap-1"><BiLayer/> {salaryMaxLPA}LPA</span>
      </div>

     

      <div className="overflow-hidden max-h-24">
      <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
  {description
    .split('\n')                 
    .filter((line) => line.trim() !== '') 
    .map((line, index) => (
      <li key={index}>{line.trim()}</li>
  ))}
</ul>

      </div>

      <Link to={`/jobs/view/${id}`}><button className="w-full bg-blue-400 font-medium text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
        Apply Now
      </button></Link>
    </div>
  );
};

export default JobCard;
