 "use client" 
import { InstallContext } from '@/app/lib/providers';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import useFetch from '../Hooks/UseFtech';

const Dashboard = () => {
    const { inistallApps, setInstallApps ,data, setData} = useContext(InstallContext)
    // console.log(inistallApps)
    const finalData = [
        {name:'Inistalled', value: inistallApps.length, fill:"#000"},
        {name:'all aps', value: data.length, fill:"#FF8811"},
    ]
    const ho = useFetch()
    console.log(ho)
    return (
        <div>
            <PieChart className='mx-auto my-5' style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={finalData}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    // isAnimationActive={isAnimationActive}
                />
                {/* <RechartsDevtools /> */}
                <Tooltip/>
                <Legend/>
            </PieChart>
        </div>
    );
};

export default Dashboard;