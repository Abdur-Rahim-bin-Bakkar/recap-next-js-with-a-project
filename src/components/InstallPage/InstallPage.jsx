'use client'
import { InstallContext } from '@/app/lib/providers';
import React, { useContext, useRef } from 'react';
import InstallCard from './InstallCard';
import { toast } from 'react-toastify';

const InstallPage = () => {
    const { inistallApps, setInstallApps } = useContext(InstallContext)
    console.log(inistallApps)
    const handelSelect = (e)=>{
        // console.log('hocche')
        console.log(e.target.value)
        if(e.target.value === 'high'){
            const sortData = [...inistallApps].sort((a,b)=> a.size - b.size)
            setInstallApps(sortData)
            // toast.success('shot by high')
            return
        }
        if(e.target.value === 'low'){
            const sortData = [...inistallApps].sort((a,b)=> b.size - a.size)
            setInstallApps(sortData)
            // toast.success('shot by low')
        }
    }
    return (
        <div className='mt-10 '>
            <div className="flex justify-between">
                <h1 className='font-bold text-lg'>{inistallApps.length} Apps Found</h1>
                <div className="">
                    <select  onClick={handelSelect} defaultValue="sort by" className="select select-primary">
                        <option disabled={true}>Sort by</option>
                        <option value={'high'} >Sort By High Size</option>
                        <option value={'low'} >Sort By Low Size</option>
                        
                    </select>
                </div>
            </div>

            <div className="mt-5 ">
                {
                    inistallApps.map(app => <InstallCard key={app.id} app={app} inistallApps={inistallApps} setInstallApps={setInstallApps} />)
                }
            </div>
        </div>
    );
};

export default InstallPage;