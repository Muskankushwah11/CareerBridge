import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        // const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, { withCredentials: true });
        const res = await axios.get(
  "https://careerbridge-fxsi.onrender.com/api/v1/application/get",
  { withCredentials: true }
);

        console.log("Backend response:", res.data);

        // Check for correct key name
        const jobs = res.data.application || res.data.applications || []; 
        dispatch(setAllAppliedJobs(jobs));
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
        dispatch(setAllAppliedJobs([]));
      }
    };

    fetchAppliedJobs();
  }, [dispatch]);
};

export default useGetAppliedJobs;
