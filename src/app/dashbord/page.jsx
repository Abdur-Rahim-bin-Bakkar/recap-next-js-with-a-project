import Dashboard from '@/components/Dashboard/Dashboard';
import Link from 'next/link';
import React from 'react';

const DashboardPage = () => {
    return (
        <div>
            <h1 className='text-2xl m-4 text-center border-b-3 pb-4 border-success'>Total app vs Installed Apps</h1>

            <div className="flex gap-3">
                <Link href={'/'} className='btn btn-success'>Go back Home</Link>
            </div>
            <Dashboard />
        </div>
    );
};

export default DashboardPage;