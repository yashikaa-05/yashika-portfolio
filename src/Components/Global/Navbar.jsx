import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='absolute top-0 left-0 w-full flex justify-center'>
            <div className='w-full max-w-[1100px] flex gap-20 justify-between items-center px-8 py-6 font-semibold'>
                <Link className='' href={"/"}>Home</Link>
                <div className='flex gap-20'>
                    <Link className='underline-anim' href={"/about"}>About</Link>
                    <Link className='' href={"/experiments"}>Experiments</Link>
                    <Link className='' href={"/"}>Contact</Link>
                </div>
            </div>
        </div>
    )
}
