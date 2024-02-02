// new contact page
import Image from 'next/image'
import React from 'react'

export default function Contactt() {
    return (
        <div className='min-h-screen flex flex-col items-center'>
            <hr />
            <div className='flex flex-col gap-20 my-40 items-center'>
                <div className='flex flex-col gap-8'>
                    <div className='relative'>
                        <Image className='absolute -top-4 -right-[-12] z-[-30] w-12 h-12' src={require("../../Assets/Elements/star.png")} />
                        <Image className='absolute top-3 -right-[68px] z-[-1] w-7 h-7' src={require("../../Assets/Elements/star-xs.png")} />

                        {/* heading */}
                        <div className='flex flex-col gap-3 items-center text-5xl font-bold tracking-[1px]'>
                            <h1>Let{`'`}s work together</h1>
                            <h1>to fulfill your creative needs</h1>
                        </div>
                    </div>
                    <p className='font-poppins tracking-[0.5px] leading-5'>Feel free to reach out for collaborations/ projects or just a friendly hello!</p>
                </div>
                <h4 className='text-2xl'>yashikamukhija5@gmail.com</h4>
            </div>
        </div>

    )
}
