// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs
import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
   
    return (
        <section className='max-w-7xl mx-auto my-20 px-4'>
            {/* Section header */}
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-gray-900'>
                    <span className='text-indigo-600'>Latest & Top </span> Job Openings
                </h1>
                <p className='text-gray-600 mt-3 text-lg'>
                    Stay ahead in your career—find jobs that match your skills and ambitions.
                </p>
            </div>

            {/* Job cards grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {allJobs.length <= 0 ? (
                    <span className='col-span-full text-center text-gray-500 text-base'>No Job Available</span>
                ) : (
                    allJobs?.slice(0, 6).map((job) => (
                        <LatestJobCards key={job._id} job={job}/>
                    ))
                )}
            </div>
        </section>
    )
}

export default LatestJobs
