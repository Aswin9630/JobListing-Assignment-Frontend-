import { useForm } from "react-hook-form";
import {MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowDown } from "react-icons/md"
import {GoX} from "react-icons/go"
import { BACKEND_URL } from "../utils/constants";

const CreateJobForm = ({onClose, onJobAdded}) => {
  const { register, handleSubmit, reset, formState:{ errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      
      const response = await fetch(`${BACKEND_URL}/jobs/createJob`, {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error(response.error);
          }
          reset();
          onJobAdded();
          onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return(
    
   <div className="w-lg shadow-2xl text-sm mx-20 md:mx-auto bg-white p-6 shadow:lg mt-10 rounded-2xl">
     <button
        onClick={onClose}
        className="absolute top-1 right-27 text-white text-4xl cursor-pointer font-bold"
      >
        <GoX />
      </button>
    <h2 className="text-2xl font-bold mb-6 text-center">Create Job Openings</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="flex flex-col gap-5">

        <div className="flex gap-5">
          <div className="w-full">
          <label className="block mb-1 font-medium">Job Title</label>
          <input type="text" {...register("jobTitle",{required:"Job Title is required"})} placeholder="Full Stack Developer" className="border w-full p-2 rounded focus:outline-none font-semibold text-normal"/>
          {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle.message}</p>}
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium">Company Name</label>
            <input type="text" {...register("company",{required:"Company name is required"})} placeholder="Amazon, Microsoft, Swiggy" className="border w-full p-2 rounded focus:outline-none font-semibold text-normal"/>
            {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
          </div>
        </div>


        <div className="flex gap-5">
          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-600">Location</label>
            <input type="text" {...register("location",{required:"Location is required"})} placeholder="Choose Preferred Location" className="border w-full p-2 rounded focus:outline-none font-semibold text-normal"/>
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-600 ">Job Type</label>
            <select {...register("jobType", { required: "Select a job type" })} className="w-full border p-2 rounded cursor-pointer focus:outline-none font-semibold text-normal">
              <option value="">Select Job Type</option>
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType.message}</p>}
          </div>
        </div>


        <div className="flex gap-5">
          <div className="w-full">
          <label className="block mb-1 font-medium text-gray-600">Salary Range</label>
          <div className="flex gap-4">
          <input type="number" {...register("salaryMin",{required:"Minimum Salary range is required"})} className="w-1/2 border p-2 rounded focus:outline-none font-semibold text-normal"
              placeholder="⇵ ₹0"/>
          <input type="number" {...register("salaryMax",{required:"Maximum Salary range is required"})} className="w-1/2 border p-2 rounded focus:outline-none font-semibold text-normal"
              placeholder="⇵ ₹12,00,000"/>

          </div>
              {errors.salaryMin && <p className="text-red-500 text-sm">{errors.salaryMin.message}</p>}
              {errors.salaryMax && <p className="text-red-500 text-sm">{errors.salaryMax.message}</p>}
        </div>

        <div className="w-full">
            <label className="block mb-1 font-medium text-gray-600">Application Deadline</label>
            <input
              type="date"
              {...register("deadline",{ required: "Deadline is required" })}
              className="w-full cursor-pointer border text-gray-500 p-2 rounded focus:outline-none font-semibold text-normal"
            />
          {errors.deadline && <p className="text-red-500 text-sm">{errors.deadline.message}</p>}
          </div>
        </div>
 

          <div>
            <label className="block mb-1 font-medium text-gray-600">Job Description</label>
            <textarea
              {...register("description",{required:"Description is required", maxLength:{value:1000, message:"Job description cannot exceed 1000 characters"}})}
              className="w-full border p-2 rounded focus:outline-none font-semibold text-normal"
              rows={4}
              placeholder="Please share a description to let the candidate know more about the job role"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className="flex justify-between font-semibold">
            <button className="flex gap-1 items-center justify-center py-2 border text-center text-sm rounded w-3/12 cursor-pointer">
              Save Draft <MdKeyboardDoubleArrowDown/>
            </button>
            <button className="flex gap-1 items-center justify-center py-2 text-center bg-blue-400 text-white text-md rounded w-3/12 cursor-pointer">
              Publish <MdKeyboardDoubleArrowRight />
            </button>
          </div>

      </div>

    </form>
   </div>
  )
};

export default CreateJobForm;
