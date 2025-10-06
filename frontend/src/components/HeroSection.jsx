// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='bg-gradient-to-r from-indigo-50 to-white py-16'>
            <div className='max-w-4xl mx-auto text-center flex flex-col gap-6'>
                {/* Highlight badge */}
                <span className='self-center px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm uppercase tracking-wider shadow-md'>
                    Leading Career Platform
                </span>

                {/* Hero title */}
                <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight'>
                    Explore, Apply & <br />
                    Land Your <span className='text-indigo-600'>Dream Career</span>
                </h1>

                {/* Hero description */}
                <p className='text-gray-600 text-lg md:text-xl'>
                    Connecting talent with opportunities worldwide. Find jobs that match your skills and ambitions.
                </p>

                {/* Search box */}
                <div className='flex w-full md:w-2/3 shadow-xl border border-gray-200 rounded-full overflow-hidden mx-auto'>
                    <input
                        type="text"
                        placeholder='Type job title, skills, or company'
                        onChange={(e) => setQuery(e.target.value)}
                        className='flex-1 px-6 py-3 text-gray-800 text-lg focus:outline-none'
                    />
                    <Button
                        onClick={searchJobHandler}
                        className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-r-full flex items-center justify-center'
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>

                {/* Optional tagline */}
                <span className='text-gray-500 mt-2 text-sm'>
                    Trusted by thousands of job seekers and recruiters
                </span>
            </div>
        </div>
    )
}

export default HeroSection
