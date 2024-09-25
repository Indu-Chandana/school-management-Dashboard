'use client'
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 85,
        absent: 15,
    },
    {
        name: 'Wed',
        present: 20,
        absent: 80,
    },
    {
        name: 'Thu',
        present: 80,
        absent: 20,
    },
    {
        name: 'Fri',
        present: 10,
        absent: 90,
    }
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt='moreDark' width={20} height={20} />
            </div>

            {/* CHART */}
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend align='left' verticalAlign='top'
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar
                        legendType='circle'
                        dataKey="present"
                        fill="#FAE27C"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        legendType='circle'
                        dataKey="absent"
                        fill="#C3EBFA"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default AttendanceChart