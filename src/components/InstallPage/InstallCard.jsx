import Image from 'next/image';
import React from 'react';
import downlode from '../../../public/images/icon-downloads.png'
import rating from '../../../public/images/icon-ratings.png'
import { toast } from 'react-toastify';

const InstallCard = ({ app, setInstallApps, inistallApps }) => {
    const handelUninstall = () => {
        setInstallApps([...inistallApps.filter(exApp => exApp.id !== app.id)])
        toast.warning(`uninstall ${app.title}`)
    }
    return (
        <div className='card p-2 mt-3 flex justify-between items-center bg-white flex-row hover:-translate-y-1 hover:shadow-amber-400'>
            <div className="flex gap-3 items-center">
                <Image src={app.image} height={45} width={45} alt='app logo' />
                <div className="">
                    <h1 className='font-semibold'>{app.title}</h1>
                    <div className="flex gap-4">
                        <Image src={downlode} height={15} width={15} alt='app logo' />
                        <Image src={rating} height={15} width={15} alt='app logo' />
                        <p className='text-[#627382]'>{app.size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={handelUninstall} className='btn btn-success'>Uninstall</button>

        </div>
    );
};

export default InstallCard;