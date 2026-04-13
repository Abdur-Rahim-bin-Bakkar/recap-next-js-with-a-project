import InstallPage from '@/components/InstallPage/InstallPage';
import React from 'react';
export const metadata = {
    title: "install application"
}

const InstallationPage = () => {
    return (
        <div className='bg-[#D2D2D220] py-15'>
            <div className="max-w-11/12 mx-auto">
                <h1 className='text-3xl text-center font-bold'>Your Installed Apps</h1>
                <p className='text-center text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>
                <InstallPage/>
            </div>
        </div>
    );
};

export default InstallationPage;