'use client'
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ expectedApp }) => {
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={400}>

                <BarChart layout='vertical'  data={expectedApp.ratings}>
                    <XAxis type='number' />
                    <YAxis dataKey={'name'} type='category' />
                    <Bar fill='#FF8811' barSize={25} dataKey={'count'} />
                    <Legend />
                    <Tooltip/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;