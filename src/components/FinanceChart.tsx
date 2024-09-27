'use client'
import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const FinanceChart = () => {

    const data = [
        {
            name: 'Jan',
            income: 4000,
            expense: 2400,
        },
        {
            name: 'Feb',
            income: 3000,
            expense: 1398,
        },
        {
            name: 'Mar',
            income: 2000,
            expense: 9800,
        },
        {
            name: 'Apr',
            income: 4000,
            expense: 2400,
        },
        {
            name: 'May',
            income: 3000,
            expense: 1398,
        },
        {
            name: 'Jun',
            income: 2000,
            expense: 9800,
        },
        {
            name: 'Jul',
            income: 4000,
            expense: 2400,
        },
        {
            name: 'Aug',
            income: 3000,
            expense: 1398,
        },
        {
            name: 'Sept',
            income: 2000,
            expense: 9800,
        },
        {
            name: 'Oct',
            income: 4000,
            expense: 2400,
        },
        {
            name: 'Nov',
            income: 3000,
            expense: 1398,
        },
        {
            name: 'Dec',
            income: 2000,
            expense: 9800,
        },
    ]

    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt='moreDark' width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false}
                        tick={{ fill: '#d1d5db' }} tickLine={false} tickMargin={10}
                    />
                    <YAxis axisLine={false}
                        tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20}
                    />
                    <Tooltip />
                    <Legend align='center' verticalAlign='top'
                        wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }} />
                    <Line type="monotone" dataKey="income"
                        stroke="#C3EBFA" strokeWidth={5} />
                    <Line type="monotone" dataKey="expense"
                        stroke="#CFCEFF" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart