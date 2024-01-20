import React, { useEffect, useState } from 'react'
import { image1, image2,  image3, image5, image6, } from '../images/gallery'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NavMenu from '@/components/NavMenu'
const images = [
    {
        image: image1,
        className: 'tall'
    },
    {
        image: image2,
        className: 'tall'
    },
    //{
        // image: image4,
        // className: 'tall'
        //},
    {
        image: image3,
        className: 'tall',
    },
    {
        image: image5,
        className: ''
    },
    {
        image: image6,
        className: 'wide'
    },
    
]

const Gallery = () => {
    const router = useRouter();
    let showNav = router.query.showNav;
    const [isShowNav, setIsShowNav] = useState(showNav === 'true');

    useEffect(() => {
        const handlePopstate = () => {
            setIsShowNav(false);
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);
    return (
        <>
            {isShowNav && <NavMenu className="m-0 p-0"/>}
            <section className='p-10 md:p-20'>
                <div className="   md:px-12 xl:px-6">          
                <div className="relative pt-10 ">
                    <div className="lg:w-2/3 md:text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">GLIMPSES OF <span className="text-primary text-green-700">SUMSHODHINI 2023.</span></h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper  mt-10" >
                    {images.map((item) => (
                        <div className={item.className}>
                            <Image src={item.image} alt="" />
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Gallery