import React from 'react'
import Image from 'next/image'

export default function About() {
    return (
        <>
            <hr />
            <div className='flex flex-col gap-10 mx-60 my-20 items-center'>
                <h1 className='text-xl font-poppins font-semibold tracking-[1px]'>ABOUT ME</h1>
                <div className='flex gap-20 items-center'>

                    <h6 className='font-poppins text-base'>As a UI Designer, I have woven storytelling and creativity into exceptional digital experiences that are both visually appealing and user-friendly.
                        <br />
                        <br />
                        Beyond pixels and prototyping, I love journaling and video editing. I have tried my best to utilise my skills by joining various clubs, volunteering many events in/ outside my university and freelancing.</h6>

                    <Image className='h-60 w-56' src={require('../../Assets/img.png')}></Image>

                </div>
            </div>
            <hr />
        </>
    )
}
