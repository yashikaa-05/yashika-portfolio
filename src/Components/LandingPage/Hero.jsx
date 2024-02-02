import Image from 'next/image';
import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <div className='flex-1 py-24 flex flex-col gap-10 justify-center items-center'>
        <Image className='w-[7.2rem] h-[6rem]' src={require("../../Assets/rainbow.png")} />
        <div className='border p-3 border-black relative'>
          <h2 className='font-bold font-[Acorn] text-3xl'>Yashika, UI Designer</h2>
          <Image className='w-[2.7rem] h-[2.4rem] absolute -left-7 -bottom-4 z-[-1]' src={require("../../Assets/Elements/DoubleCircle.png")} />
          <Image className='w-[24px] h-[27.5px] absolute -left-12 -bottom-2 z-[-1]' src={require("../../Assets/Elements/Pen.png")} />
          <div className='absolute -top-[6px] -left-[6px] bg-white border border-black p-1 w-2 h-2'></div>
          <div className='absolute -top-[6px] -right-[6px] bg-white border border-black p-1 w-2 h-2'></div>
          <div className='absolute -bottom-[6px] -left-[6px] bg-white border border-black p-1 w-2 h-2'></div>
          <div className='absolute -bottom-[6px] -right-[6px] bg-white border border-black p-1 w-2 h-2'></div>
        </div>
        <div className='text-center flex flex-col gap-3'>
          <div className='text-4xl font-bold font-[Acorn] flex gap-2 justify-center items-center tracking-[1.5px] -mb-1'>
            I love <span className='bg-[#BAFCDC] rotate-1 px-5 pb-[6px] pt-2 rounded-full flex gap-4 items-center before:rounded-full before:w-[10px] before:h-[10px] before:mt-[-2px] before:bg-black'>crafting</span> <span className='textShadow showStrip-anim-yellow text-white'>engaging</span> experiences
          </div>
          <h1 className='text-4xl font-bold font-[Acorn] tracking-[1.5px]'>using designing tools. I also love to</h1>
          <div className='text-4xl font-bold font-[Acorn] flex gap-2 justify-center items-center tracking-[1.5px] -mt-1'>
            <span className='textShadow showStrip-anim-pink text-white'>express</span> my creative <span className='bg-[#F2C3C0] -rotate-1 px-5 pb-[6px] pt-2 rounded-full flex gap-4 items-center after:rounded-full after:w-[10px] after:h-[10px] after:mt-[-2px] after:bg-black'>innovations</span> !
          </div>

          {/* Tools */}
          <div className='flex mt-4 gap-2 justify-center'>
            <Image className='w-[1.5rem] h-[1.5rem]' src={require("../../Assets/figma.png")} />
            <Image className='w-[1.5rem] h-[1.5rem]' src={require("../../Assets/logo2.png")} />
          </div>
        </div>
      </div>
    </div>
  );
}