import Image from 'next/image';
import React from 'react';
import { FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
// import { useNavigate } from 'react-router';

const AppCard = ({ app }) => {
    // console.log(app)
    // const naavigate = useNavigate()
    // const handelDet = () => {
    //     naavigate(`/ditelles/${app.id}`)
    // }
    return (
        <div className='card p-3 rounded-2xl bg-white'>
            <Image src={app.image} alt='app image' width={100} height={100} className='w-full rounded-lg max-h-80 object-contain'  />
            <div className="card-body">
                <h1 className='text-lg font-bold'>{app.title}</h1>
                <div className="flex justify-between">
                    <div className="bg-[#F1F5E8] text-[#00D390] flex items-center gap-3 py-1 px-3 rounded-md font-semibold">
                        <FaCloudDownloadAlt />
                        <span>{app.downloads}</span>
                    </div>
                    <div className="bg-[#FFF0E1] text-[#FF8811] flex items-center gap-3 py-1 px-3 rounded-md font-semibold">
                        <FaStar />
                        <span>{app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;