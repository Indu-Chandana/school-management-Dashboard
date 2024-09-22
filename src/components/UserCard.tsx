import Image from 'next/image'
import React from 'react'

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
            <div className='flex justify-between'>
                <span>2024/25</span>
                <Image src="/more.png" alt='more' width={20} height={20} />
            </div>
            <h1>1,234</h1>
            <h2>{type}</h2>
        </div>
    )
}

export default UserCard