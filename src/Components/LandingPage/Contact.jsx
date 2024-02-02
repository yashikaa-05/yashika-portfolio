import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <div className='min-h-screen flex flex-col items-center'>
            <div className='flex-1 py-8 flex flex-col gap-10 justify-center items-center'>
                <div>
                    <div className='flex gap-10 items-end'>
                        <div className='relative'>
                            <Image className='absolute -top-5 -left-5 z-[-1] w-10 h-11' src={require("../../Assets/Elements/star.png")} />
                            <h1 className='flex-1 text-4xl font-bold tracking-[1.5px]'>Let{`'`}s work together</h1>
                        </div>
                        <div className='bg-[#FFEEB2] px-8 py-4 rounded-r-full rounded-bl-full relative'>
                            <p className='mb-2 font-poppins tracking-[0.5px]'>Don{`'`}t be a stranger</p>
                            <div className='font-poppins tracking-[0.5px] leading-5'>
                                <p>Fill out the form, send me an email or</p>
                                <p>reach out on social - I{`'`}ll be in touch.</p>
                            </div>
                            <Image className='absolute top-3 -right-[68px] z-[-1] w-7 h-7' src={require("../../Assets/Elements/star-xs.png")} />
                        </div>
                    </div>
                    <h1 className='flex-1 text-4xl font-bold tracking-[1.5px] mt-3 flex gap-3'>to fulfill your <span className='w-[max-content] flex flex-col relative after:absolute after:w-full after:h-[30%] after:bottom-1 after:bg-[#F2C3C0] after:z-[-1]'>creative</span> needs</h1>
                </div>
                <div className='w-full grid grid-rows-[auto_auto] grid-cols-[45%_1fr] gap-4 font-poppins'>
                    <input type='text' placeholder='Name' className='outline-none border border-black px-3 py-1 rounded-md placeholder:text-black placeholder:text-[15px]' />
                    <input type='text' placeholder='E-mail' className='outline-none border border-black px-3 py-1 rounded-md placeholder:text-black placeholder:text-[15px]' />
                    <textarea placeholder='Message' className='col-start-1 col-end-3 outline-none border h-[100px] border-black px-3 py-2 rounded-md placeholder:text-black placeholder:text-[15px]' />
                </div>
                <div className='w-full flex justify-end'>
                    <button className='underline-anim tracking-[0.5px]'>Let{`'`}s do it</button>
                </div>
            </div>
        </div>
    )
}
