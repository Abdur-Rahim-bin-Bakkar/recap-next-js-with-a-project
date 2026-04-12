'use client'
import { InstallContext } from '@/app/lib/providers';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const InstallBtn = ({ expectedData }) => {
    const [ins, setIns] = useState()
    const handelInistall = () => {
        const find = inistallApps.find(app => app.id === expectedData.id)
        setIns(true)
        console.log(find)
        if (find) {
            toast.error(`already installed ${expectedData.title}`)
            return
        }
        setInstallApps([...inistallApps, expectedData])
        toast.success(`successfully installed ${expectedData.title}`)
    }
    const { inistallApps, setInstallApps } = useContext(InstallContext)
    return (
        <div>
            <button disabled={ins} onClick={handelInistall} className="btn bg-[#00D390] text-white font-semibold max-w-50">{!ins ? `Install Now (${expectedData.size} MB)` : "Already inistalled"}</button>
        </div>
    );
};

export default InstallBtn;