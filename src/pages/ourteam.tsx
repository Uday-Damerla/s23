import React from 'react'
import {  mehfooz, munavvar, thanay, profile,mash } from '../images/team'
import Image from 'next/image'
import { twitter, linkedin, github } from '../images/icons';
import NavMenu from '@/components/NavMenu';
import { useRouter } from 'next/router';

const teamDetails = [
    {
        name: 'Mr. Badrinarayan Bachawala',
        designation: 'General Secretary - Technical Club(SAC)',
        image: profile,
        year: "4'th year CSO",
        
    },
    {
        name: 'Mr. Mani jayanth Kasagoni',
        designation: 'President, ISTE KITSW',
        image: profile,
        year: "4'th year CE",
    },
    {
        name: 'Dr. B. Vijay Kumar',
        designation: 'Co-Coordinator',
        image: profile,
        year: "Faculty-Incharge Technical Club(SAC)",
    },
    {
        name: 'Dr. T. Senthil Muragan',
        designation: 'Co-Coordinator',
        image: profile,
        year: "Faculty-Incharge ISTE KITSW",
    },
    {
        name: 'Dr. H. Ramesh Babu',
        designation: 'Coordinator',
        image: profile,
        year: "Chairman ISTE KITSW",
    },
    {
        name: 'Sri. M. Narasimha Rao',
        designation: 'Co-Convenor',
        image: profile,
        year: "Assoc.Dean, Student Affairs",
    },
    {
        name: 'Dr. V. Shankar',
        designation: 'Convenor',
        image: profile,
        year: "Dean, Student Affairs",
    },
    {
        name: 'Prof. K. Ashoka Reddy',
        designation: '',
        image: profile,
        year: "Principal, KITSW",
    },
    {
        name: 'Sri. P. Narayana Reddy',
        designation: '',
        image: profile,
        year: "Treasurer, KITSW",
    },
    {
        name: 'Capt. V. Lakshmikantha Rao',
        designation: 'Former Minister( Govt. of AP) & Ex MP ( Rajya Sabha)',
        image: profile,
        year: "Chairman, KITSW",
    },
    // ...rest of the team members
];


const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && (
                <NavMenu className="m-0 p-0"/>
            )}
            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                <div className="relative pt-10 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">ORGANIZING <span className="text-primary text-[#EACD69]">COMMITTEE.</span></h1>

                    </div>
                </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                    {teamDetails.map((item) => (
                        <div className="w-[300px] px-6 py-6  text-center bg-slate-200 rounded-lg lg:mt-0 xl:px-10">
                            <div className="space-y-4 xl:space-y-6 ">
                                <Image className="mx-auto rounded-full h-36 w-36" src={item.image} alt="author avatar" />
                                <div className="space-y-2">
                                    <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                                    <h1 className="text-black font-bold">{item.name}</h1>
                                    <h1 className='text-black'>{item.designation}</h1>
                                    <h1 className='text-black'>{item.year}</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}

export default Ourteam