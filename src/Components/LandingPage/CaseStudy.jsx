import React from 'react'
import Image from 'next/image'

export default function Contact() {
    return (
        <>
            <hr className='color-black' />
            <div className='flex gap-16 mt-16 mx-40 '>

                {/* case study - 1 */}
                <div className='flex flex-col items-end'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl font-bold'>U Library</h1>
                        <h6 className='font-poppins text-sm'>This app was designed and developed for the Chitkara University. The main aim of this project is  to bridge the gap between traditional library practices while offering seamless user experience.</h6>
                        <a href="https://www.figma.com/proto/Eyogv093LOZj2hMhVAqunf/U-Library?page-id=230%3A289&type=design&node-id=230-290&viewport=-1959%2C480%2C0.46&t=kMgNcW6Gp1L7zcDl-1&scaling=min-zoom&starting-point-node-id=230%3A290&mode=design" target='_blank'>
                            <button className='underline-anim tracking-[0.5px]' src='www.google.com'>View more</button>
                        </a>
                    </div>

                    <Image className='h-80 w-80' src={require('../../Assets/ulib-img.png')}></Image>
                </div>

                <div className='w-3 h-20 decoration-black'></div>


                {/* case study - 2 */}
                <div className='flex flex-col items-end'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl font-bold'>Drunken Roads</h1>
                        <h6 className='font-poppins text-sm'>This web and app was designed for a client. The main aim was to aware users about the trip itinerary, price and duration; and users can contact them to ask any query.</h6>
                        <a href="https://www.figma.com/proto/2DWPHzbYILhfrKs5p8vLn4/Yashika-Portfolio?page-id=340%3A1617&type=design&node-id=340-1746&viewport=-178%2C453%2C0.61&t=8Ce7m7S3uUaX2qek-1&scaling=min-zoom&mode=design" target='_blank'>
                            <button className='underline-anim tracking-[0.5px]' src='www.google.com'>View more</button>
                        </a>
                    </div>
                    <Image className='h-4/5 w-4/5' src={require('../../Assets/dr-img.png')}></Image>
                </div>

            </div>
            <hr />
        </>
    )
}
