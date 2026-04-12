import React from 'react';
import image from '../../public/images/error-404.png'
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='bg-[#D2D2D220] py-15 text-center space-y-5'>
            <Image src={image} width={200} height={250} alt='not found image' className='max-w-100 mx-auto'></Image>
            <h1 className='font-bold text-2xl'>Oops, page not found!</h1>
            <p className='text-[#627382]'>The page you are looking for is not available.</p>

            <Link href={'/'} className='btn bg-linear-to-br to-[#632EE3] from-[#9F62F2] font-bold text-white'>Go Back</Link>
        </div>
    );
};

export default NotFound;