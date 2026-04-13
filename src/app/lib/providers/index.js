'use client'
import useFetch from '@/components/Hooks/UseFtech';
// import Contexts from '@/components/Contexts/Contexts';
// import React from 'react';
import React, { createContext, useState } from 'react';
export const InstallContext = createContext()


const Providers = ({ children }) => {
    const [data, setData] = useFetch()
    const [inistallApps, setInstallApps] = useState([])
    return (
        <InstallContext value={{ inistallApps, setInstallApps ,data, setData}}>

            {children}
        </InstallContext>

    );
};

export default Providers;