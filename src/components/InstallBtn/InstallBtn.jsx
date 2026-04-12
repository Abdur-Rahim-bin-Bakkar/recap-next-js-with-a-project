'use client'
import { InstallContext } from '@/app/lib/providers';
import React, { useContext, useState } from 'react';

const InstallBtn = ({ expectedData }) => {
    const [ins, setIns] = useState()
    const handelInistall = () => {
        setIns(true)
        const find = inistallApps.find(app => app.id === expectedData.id)
        console.log(find)
        if (find) {
            return
        }
        setInstallApps([...inistallApps, expectedData])
    }
    const { inistallApps, setInstallApps } = useContext(InstallContext)
    // console.log(data)
    console.log(inistallApps)
    return (
        <div>
            <button disabled={ins} onClick={handelInistall} className="btn bg-[#00D390] text-white font-semibold max-w-50">{!ins ? `Install Now (${expectedData.size} MB)` : "Already inistalled"}</button>
        </div>
    );
};

export default InstallBtn;