import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import Image from 'next/image';

const ProjectArr = [
    {
        image: require("../../Assets/Projects/frozen.png"),
        name: "Frozen"
    },
    {
        image: require("../../Assets/Projects/tangled.png"),
        name: "Tangled"
    },
    {
        image: require("../../Assets/Projects/ralph.png"),
        name: "Ralph"
    },
];

function ProjectCard({image}) {
    return (
        <div className='mx-2 h-[440px] 2xl:h-[550px] flex justify-center items-center relative'>
            <Image className='absolute w-full h-full object-cover' src={image} />
            {/* <p>Hello</p> */}
        </div>
    )
}

const ButtonGroup = ({ next, previous, goToSlide, selectedIndex, setSelectedIndex, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    const [loader, setLoader] = useState(false);

    function animate() {
        setLoader(true);
        gsap.set(".animate-blink", {
            opacity: 0
        });
        gsap.to(".animate-blink", {
            opacity: 1, duration: 0.7, onComplete: () => {
                setLoader(false);
            }
        });
    }
    return (
        <div className="z-[13] absolute flex items-center gap-10 left-[50%] bottom-0 translate-x-[-50%]">
            <button disabled={loader} className='bg-[rgb(0,0,0,0.2)] text-white rounded-full w-8 h-8 flex justify-center items-center' onClick={() => {
                goToSlide(currentSlide - 1);
                setSelectedIndex((currentSlide - 1) % 3);
                animate();
            }}><FiChevronLeft className='' size={24} /></button>
            <p className={`text-4xl w-[200px] text-center animate-blink`}>{ProjectArr[selectedIndex].name}</p>
            <button disabled={loader} className='bg-[rgb(0,0,0,0.2)] text-white rounded-full w-8 h-8 flex justify-center items-center' onClick={() => {
                goToSlide(currentSlide + 1);
                setSelectedIndex((currentSlide + 1) % 3);
                animate();
            }}><FiChevronRight size={24} /></button>
        </div>
    );
};

const responsive = {
    desktop: {
        breakpoint: { max: 10000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-full flex flex-col relative'>
                <h1 className='text-center font-bold font-[Acorn] text-4xl'>Selected Projects</h1>
                <div className='w-full relative flex flex-col overflow-hidden'>
                    <div className='ellipse-top z-[12] absolute -top-10 left-[50%] translate-x-[-50%] w-[110vw] h-[100px] bg-[white]'></div>
                    <Carousel
                        customButtonGroup={<ButtonGroup selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />}
                        arrows={false}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all 0.5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {
                            ProjectArr.map((item, index) => {
                                return (
                                    <ProjectCard key={`Project_${index}`} image={item.image} />
                                )
                            })
                        }
                    </Carousel>
                    <div className='ellipse-bottom z-[12] absolute -bottom-7 left-[50%] translate-x-[-50%] w-[110vw] h-[100px] bg-[white]'></div>
                </div>
            </div>
        </div>
    )
}
