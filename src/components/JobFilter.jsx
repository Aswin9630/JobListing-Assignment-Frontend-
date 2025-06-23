import { FiMapPin, FiSearch } from "react-icons/fi";
import { RiUserVoiceLine } from "react-icons/ri";
import { Range } from "react-range";

const JobFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const MIN = 1000;
  const MAX = 100000;
  const [minVal, maxVal] = filters.salaryRange;
  const leftPercent = ((minVal - MIN) / (MAX - MIN)) * 100;
  const rightPercent = ((maxVal - MIN) / (MAX - MIN)) * 100;

  const handleSalaryChange = (values) => {
    setFilters((prev) => ({
      ...prev,
      salaryRange: values,
    }));
  };

  return (
    <div className="flex flex-wrap justify-around items-center gap-6 text-md bg-white px-9 m-5 py-6 rounded-lg shadow-sm ">
      <div className="flex items-center w-64 border-r-2 border-gray-200">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          name="title"
          placeholder="Search by Job Title, Role"
          className="w-full p-2 outline-none"
          value={filters.title}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center w-64 border-r-2 border-gray-200">
        <FiMapPin className="text-gray-500 mr-2" />
        <input
          type="text"
          name="location"
          className="w-full p-2 outline-none"
          placeholder="Preferred Location"
          value={filters.location}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center w-64 text-gray-500 border-r-2 border-gray-200">
        <RiUserVoiceLine className=" mr-2" />
        <select
          name="jobType"
          className="w-full p-2 outline-none cursor-pointer mr-5"
          value={filters.jobType}
          onChange={handleChange}
        >
          <option value="">Job type</option>
          <option value="FullTime">Full-Time</option>
          <option value="PartTime">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 items-center w-64">
        <div className="flex gap-10">
          <label className="text-sm font-medium mb-1">Salary Per Month</label>
          <div className="flex gap-2 justify-between text-sm font-medium mb-2">
            <span>
              ₹{Math.round(filters.salaryRange[0] / 1000)}k - ₹
              {Math.round(filters.salaryRange[1] / 1000)}k
            </span>
          </div>
        </div>

        <Range
          label="Select your value"
          step={1000}
          min={MIN}
          max={MAX}
          values={filters.salaryRange}
          onChange={handleSalaryChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "2px",
                width: "100%",
                backgroundColor: "lightgray",
                borderRadius: "15px",
                background: `linear-gradient(
            to right,
            lightgray 0%,
            lightgray ${leftPercent}%,
            black ${leftPercent}%,
            black ${rightPercent}%,
            lightgray ${rightPercent}%,
            lightgray 100%
          )`,
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: "18px",
                width: "18px",
                background: "#fff",
                borderRadius: "50%",
                borderColor: "#000",
                borderWidth: "6px",
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default JobFilter;
