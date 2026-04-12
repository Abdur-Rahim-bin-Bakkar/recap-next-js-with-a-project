import AppCard from '@/components/AppCard/AppCard';
import React from 'react';

const AppsPage = async () => {
    const data = await fetch('https://mocki.io/v1/e21d346b-58f4-4402-8d89-a9763c19f2d2')
    const apps = await data.json()
    console.log('hello i am all apps')
    return (
        <div className='bg-[#D2D2D220] py-10'>
            <div className="max-w-11/12 mx-auto">
                <h1 className='text-3xl text-center font-bold'>hi this is app page</h1>
                <p className='text-center  mt-3 text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                    {
                        apps.map((app) => {
                          
                            return <AppCard key={app.id} app={app} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AppsPage;