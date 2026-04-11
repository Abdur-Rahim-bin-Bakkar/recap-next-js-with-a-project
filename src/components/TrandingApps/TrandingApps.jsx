import React, { use } from 'react';
import AppCard from '../AppCard/AppCard';
import Link from 'next/link';
const TrandingApps = async () => {
    const data = await fetch('https://mocki.io/v1/e21d346b-58f4-4402-8d89-a9763c19f2d2')
    const apps = await data.json()
    console.log(apps)
    return (
        <div className='bg-[#d2d2d253] py-10'>
            <div className="max-w-11/12 mx-auto">
                <h1 className='text-3xl text-center font-bold'>Trending Apps</h1>
                <p className='text-[#627382] text-center my-5'>Explore All Trending Apps on the Market developed by us</p>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {
                        apps.map((app,ind) => {
                            if(ind >7){
                                return
                            }
                            return <AppCard key={app.id} app={app} />
                        })
                    }
                </div>
                <div className="flex justify-center mt-5">
                    <Link className='btn bg-linear-to-br to-[#632EE3] from-[#9F62F2] text-white font-bold ' href={'/apps'}>All Apps</Link>
                </div>
            </div>
        </div>
    );
};

export default TrandingApps;