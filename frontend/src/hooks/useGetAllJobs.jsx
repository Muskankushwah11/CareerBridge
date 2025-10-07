// import { setAllJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllJobs();
//     },[])
// }

// export default useGetAllJobs

import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector(store => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const token = localStorage.getItem('token'); // 👈 get token

        // const res = await axios.get(
        //   `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`, // 👈 send token
        //     },
        //     withCredentials: true,
        //   }
        // );
        const res = await axios.get(
  `https://careerbridge-fxsi.onrender.com/api/v1/job/get?keyword=${searchedQuery}`,
  {
    headers: {
      Authorization: `Bearer ${token}`, // send JWT token
      "Content-Type": "application/json",
    },
    withCredentials: true,
  }
);


        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllJobs();
  }, [searchedQuery]);
};

export default useGetAllJobs;
