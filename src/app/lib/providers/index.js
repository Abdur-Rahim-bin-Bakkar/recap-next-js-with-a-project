'use client'
// import Contexts from '@/components/Contexts/Contexts';
// import React from 'react';
import React, { createContext, useState } from 'react';
export const InstallContext = createContext()

const Providers = ({children}) => {
    const [inistallApps, setInstallApps] = useState([])
    return (
         <InstallContext value={{ inistallApps, setInstallApps }}>

            {children}
        </InstallContext>
     
    );
};

export default Providers;