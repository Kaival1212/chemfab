import React, { useRef } from 'react';

const images = [
    { url: '/products/1.jpg', title: "Vacuum Pot", subtitle: "High-quality vacuum pot for industrial use" },
    { url: '/products/2.jpg', title: "Chimney", subtitle: "Efficient chimney system for smoke extraction" },
    { url: '/products/3.jpg', title: "Mixture Machine", subtitle: "Durable mixture machine for various applications" },
    { url: '/products/4.jpg', title: "Ribbon Blender", subtitle: "Precision ribbon blender for thorough mixing" },
    { url: '/products/5.jpg', title: "Reactor", subtitle: "High-performance reactor for chemical processes" },
    { url: '/products/6.jpg', title: "V Clone Blender", subtitle: "Versatile V clone blender for efficient blending" },
    { url: '/products/7.jpg', title: "Storage Tank", subtitle: "Large capacity storage tank for liquids" },
    { url: '/products/8.jpg', title: "Mixture", subtitle: "Reliable mixture equipment for industrial needs" },
    { url: '/products/9.jpg', title: "Condenser", subtitle: "Advanced condenser for effective cooling" },
];

function ImageCard({ url, title = "ono", subtitle = 'no' }) {
    return (
        <div className='w-[326px] flex-shrink-0 p-2 container'>
            <img src={url} alt={title} className='w-[326px] h-[326px] object-cover rounded'/>
            <h1 className='font-semibold text-lg'>{title}</h1>
            <h2 className='font-normal text-md text-[#0D0D0D]/70'>{subtitle}</h2>
        </div>
    );
}

function ProductsSection() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -326, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 326, behavior: 'smooth' });
        }
    };

    return (
        <section id='products' className='flex flex-col p-8'>
            <h1 className='font-bold text-2xl md:text-4xl mb-4 md:mb-12'>Our Products</h1>
            <div className='relative'>
                <button
                    onClick={scrollLeft}
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10'
                >
                    &#8592;
                </button>
                <div
                    className='flex overflow-x-auto no-scrollbar'
                    ref={scrollContainerRef}
                >
                    {images.map((image, index) => (
                        <ImageCard
                            key={index}
                            url={image.url}
                            title={image.title || ""}
                            subtitle={image.subtitle || ""}
                        />
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10'
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}

export default ProductsSection;
