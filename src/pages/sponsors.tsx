import React from 'react'
import { sponsor1} from '../images/sponsors'
import Image from 'next/image'
import NavMenu from '@/components/NavMenu'
import { useRouter } from 'next/router'
const eventSponsors = [
    {
        image: sponsor1
    },
]
const sponsors = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && <NavMenu className="m-0 p-0"/>}
            <div className='bg-[#151515] pb-10'>
                <div className="   md:px-12 xl:px-6 ">         
                 <div className="relative pt-10 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold  text-4xl md:text-6xl xl:text-7xl">Sponsors<span className="text-primary text-green-700">.</span></h1>

                    </div>
                </div>
                </div>
                <div className="mx-auto  px-2 py-2 lg:px-10 lg:pt-12 ">
                <div className="container justify-center lg:max-w-[1300px]">
                        <div className="flex justify-center w-full">
                            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(650px,1fr))] gap-4 items-center">
                                {eventSponsors.map((sponsor) => (
                                    <div className='bg-slate-100 p-3 justify-center flex rounded-3xl m-4'>
                                        <div className="flex justify-center items-center w-full">
                                            <Image className="h-auto max-w-full rounded-xl" src={sponsor.image} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sponsors