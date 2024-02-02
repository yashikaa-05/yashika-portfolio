import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1100px] flex gap-20 justify-between items-center px-8 py-6 font-poppins'>
                <p className='text-[13px] tracking-wide'>Designed & Developed by @Yashika2023</p>
                <div className='flex gap-3 items-center'>
                    <Image className='w-3 h-3' src={require("../../Assets/SocialMedia/linkedin.png")} />
                    <Image className='w-4 h-4 -mb-2' src={require("../../Assets/SocialMedia/instagram.png")} />
                    <Image className='w-4 h-4 -mb-2' src={require("../../Assets/SocialMedia/email.png")} />
                </div>
            </div>
        </div>
    )
}
