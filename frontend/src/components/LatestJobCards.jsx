// import React from 'react'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const LatestJobCards = ({job}) => {
//     const navigate = useNavigate();
//     return (
//         <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//             <div>
//                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                 <p className='text-sm text-gray-500'>India</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>

//         </div>
//     )
// }

// export default LatestJobCards

import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/description/${job._id}`)}
            className='p-6 rounded-2xl shadow-md border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:translate-y-1'
        >
            {/* Company info */}
            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2'>
                <div>
                    <h2 className='text-lg font-semibold text-gray-800'>{job?.company?.name}</h2>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
                <div className='mt-2 sm:mt-0'>
                    <span className='text-gray-400 text-sm italic'>Posted recently</span>
                </div>
            </div>

            {/* Job title & description */}
            <div className='mt-4'>
                <h3 className='text-xl font-bold text-gray-900'>{job?.title}</h3>
                <p className='text-gray-600 mt-2 line-clamp-3'>{job?.description}</p>
            </div>

            {/* Badges for position, type, salary */}
            <div className='flex flex-wrap gap-2 mt-5'>
                <Badge className='bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors'>
                    {job?.position} Positions
                </Badge>
                <Badge className='bg-red-100 text-red-600 font-medium hover:bg-red-200 transition-colors'>
                    {job?.jobType}
                </Badge>
                <Badge className='bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition-colors'>
                    {job?.salary} LPA
                </Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
