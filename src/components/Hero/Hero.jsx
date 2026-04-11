import React from 'react';
import playstor from '../../../public/images/playStor.png';
import appstor from '../../../public/images/stor.png';
import hero from '../../../public/images/hero.png';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='bg-[#D2D2D220]'>
            <div className="max-w-11/12 py-10">
                <h1 className='text-4xl font-bold text-center bg-linear-to-br to-[#632EE3] from-[#9F62F2] bg-clip-text'>We Build <br />
                    <span className='text-transparent'>Productive</span> Apps</h1>

                <p className='text-center text-[#627382] max-w-[80%] mx-auto mt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>


                <div className="my-10 flex justify-center items-center gap-4">
                    <button className='btn'>
                        <Image src={playstor} alt={'play stor logo'} width={20} height={20} />
                        Google Play
                    </button>
                    <button className='btn'>
                        <Image src={appstor} alt={'app stor logo'} width={20} height={20} />
                        Google Play
                    </button>
                </div>

                <Image src={hero} alt='hero image' className='max-w-[65%] mx-auto'/>
            </div>
        </div>
    );
};

export default Hero;